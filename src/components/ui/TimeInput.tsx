import TextField from "@mui/material/TextField"
import React from "react"

interface TimeInputProps {
  label: string
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TimeInput: React.FC<TimeInputProps> = ({ label, value, handleChange }) => {
  return (
    <div className='mx-auto my-5 w-full sm:w-[230px]'>
      <TextField
        sx={{
          margin: "auto",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor: "white",
          },
          "& fieldset": {
            borderWidth: "2px",
          },
        }}
        label={label}
        value={value}
        onChange={handleChange}
        type='time'
        InputLabelProps={{ shrink: true }}
      />
    </div>
  )
}

export default TimeInput
