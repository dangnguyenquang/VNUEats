import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { FC, ReactNode } from 'react'

interface Option {
  value: string | number
  label: string
}

interface CustomSelectProps {
  label: string
  options: Option[]
  value: string | number
  handleChange?: (value: string | number) => void
}

const CustomSelect: FC<CustomSelectProps> = ({ label, options, value, handleChange }) => {
  const handleSelectChange = (
    event: SelectChangeEvent<string | number>,
    _child: ReactNode,
  ) => {
    if (handleChange) {
      handleChange(event.target.value as string | number)
    }
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`select-label-${label.replace(/\s+/g, '-')}`}>{label}</InputLabel>
      <Select
        labelId={`select-label-${label.replace(/\s+/g, '-')}`}
        id={`select-${label.replace(/\s+/g, '-')}`}
        value={value}
        onChange={handleSelectChange}
        label={label}
        sx={{
          borderRadius: '20px',
          '& fieldset': {
            borderWidth: '2px',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
