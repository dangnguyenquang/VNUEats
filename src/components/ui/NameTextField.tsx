import TextField from '@mui/material/TextField'
import { useState } from 'react'

interface NameTextFieldProps {
  label: string
  className?: string
  whiteBg?: boolean
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  autoComplete?: string
}

const NameTextField: React.FC<NameTextFieldProps> = ({
  label,
  className = '',
  whiteBg = false,
  value,
  handleChange,
  autoComplete = 'off',
}) => {
  const [error, setError] = useState<boolean>(false)

  const validateName = (name: string): boolean => {
    const nameRegex = /^(?:[A-ZÀ-Ỹ][a-zà-ỹ]*\s?)+$/u
    return nameRegex.test(name.trim())
  }

  const handleBlur = () => {
    setError(!validateName(value))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    handleChange(e)
    if (error) setError(false)
  }

  return (
    <div className={`mx-auto max-w-[500px] my-5 ${className}`}>
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
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
        error={error}
        helperText={
          error
            ? 'Trường này là bắt buộc và phải là tên hợp lệ (mỗi từ bắt đầu bằng chữ cái hoa)'
            : ''
        }
        inputProps={{ inputMode: 'text' }}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default NameTextField
