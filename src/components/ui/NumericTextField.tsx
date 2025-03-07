import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

interface NumericTextFieldProps {
  label: string
  className?: string
  whiteBg?: boolean
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NumericTextField: React.FC<NumericTextFieldProps> = ({
  label,
  className = '',
  whiteBg = false,
  value,
  handleChange,
}) => {
  const [error, setError] = useState<boolean>(false)

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
          const newValue = e.target.value
          if (/^\d*$/.test(newValue)) {
            handleChange(e)
            if (error) setError(false)
          }
        }}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'Trường này là bắt buộc' : ''}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
    </div>
  )
}

export default NumericTextField
