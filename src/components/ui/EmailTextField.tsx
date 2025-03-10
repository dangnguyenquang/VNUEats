import TextField from '@mui/material/TextField'
import { useState } from 'react'

interface EmailTextFieldProps {
  label: string
  className?: string
  whiteBg?: boolean
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  autoComplete?: string
}

const EmailTextField: React.FC<EmailTextFieldProps> = ({
  label,
  className = '',
  whiteBg = false,
  value,
  handleChange,
  autoComplete = 'off',
}) => {
  const [error, setError] = useState<boolean>(false)

  const handleBlur = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(value)) {
      setError(true)
    }
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
        onChange={(e) => {
          handleChange(e)
          if (error) setError(false)
        }}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'Vui lòng nhập địa chỉ email hợp lệ' : ''}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default EmailTextField
