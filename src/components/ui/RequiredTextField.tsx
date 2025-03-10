import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

interface RequiredTextFieldProps {
  label?: string
  className?: string
  placeholder?: string
  whiteBg?: boolean
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
}

function RequiredTextField({
  label,
  className = '',
  placeholder,
  whiteBg = false,
  value,
  handleChange,
  required = true,
  autoComplete = 'off',
}: RequiredTextFieldProps) {
  const [error, setError] = useState(false)

  const handleBlur = () => {
    if (!value) {
      setError(true)
    }
  }

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
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e)
          if (error) setError(false)
        }}
        onBlur={handleBlur}
        required={required}
        error={error}
        placeholder={placeholder}
        helperText={error && required ? 'Đây là trường bắt buộc' : ''}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default RequiredTextField
