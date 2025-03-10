import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'

interface PasswordTextFieldProps {
  label?: string
  confirm?: boolean
  className?: string
  placeholder?: string
  whiteBg?: boolean
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
}

function PasswordTextField({
  label,
  confirm = false,
  className,
  placeholder,
  whiteBg,
  value,
  handleChange,
  autoComplete = 'off',
}: PasswordTextFieldProps) {
  const [password, setPassword] = useState(value || '')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [matchError, setMatchError] = useState(false)
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false)

  useEffect(() => {
    if (password.length < 6 && password !== '') {
      setErrorPassword(true)
    } else {
      setErrorPassword(false)
    }

    if (touchedConfirmPassword) {
      if (confirmPassword === '') {
        setErrorConfirmPassword(true)
      } else {
        setErrorConfirmPassword(false)
      }

      if (password !== confirmPassword) {
        setMatchError(true)
      } else {
        setMatchError(false)
      }
    }
  }, [password, confirmPassword, touchedConfirmPassword])

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    handleChange(event)
  }

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
    setTouchedConfirmPassword(true)
  }

  const handlePasswordBlur = () => {
    if (!password || password.length < 6) {
      setErrorPassword(true)
    }
  }

  const handleConfirmPasswordBlur = () => {
    setTouchedConfirmPassword(true)
    if (!confirmPassword) {
      setErrorConfirmPassword(true)
    }
    if (password && confirmPassword !== password) {
      setMatchError(true)
    } else {
      setMatchError(false)
    }
  }

  const toggleShowPassword = () => setShowPassword((prev) => !prev)
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  return (
    <div className={`mx-auto w-full sm:max-w-[300px] md:max-w-[500px] my-5 ${className}`}>
      <TextField
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: whiteBg ? 'white' : 'transparent',
          },
          '& fieldset': {
            borderWidth: '2px',
          },
        }}
        label={label}
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        type={showPassword ? 'text' : 'password'}
        error={errorPassword}
        helperText={errorPassword ? 'Mật khẩu phải có ít nhất 6 kí tự' : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        autoComplete={autoComplete}
      />

      {confirm && (
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
            marginTop: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              backgroundColor: whiteBg ? 'white' : 'transparent',
            },
            '& fieldset': {
              borderWidth: '2px',
            },
          }}
          label="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          type={showConfirmPassword ? 'text' : 'password'}
          error={touchedConfirmPassword && (errorConfirmPassword || matchError)}
          helperText={
            touchedConfirmPassword && errorConfirmPassword
              ? 'Đây là trường bắt buộc'
              : matchError
                ? 'Mật khẩu không trùng khớp'
                : ''
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete={autoComplete}
        />
      )}
    </div>
  )
}

export default PasswordTextField
