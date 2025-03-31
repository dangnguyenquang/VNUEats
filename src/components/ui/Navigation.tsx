import { NavigationProps } from '@/types/api/order'
import { Tab, Tabs } from '@mui/material'

const Navigation: React.FC<NavigationProps> = ({ labels, value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="navigation tabs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fdf8e7',
        '& .MuiTabs-flexContainer': {
          justifyContent: 'center',
        },
        '& .MuiTab-root': {
          minWidth: '120px',
          padding: '8px 16px',
          fontSize: { xs: 12, sm: 14 },
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          color: '#333333',
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#7D0600',
          height: '3px',
        },
      }}
    >
      {labels.map((label, index) => (
        <Tab
          key={`tab-${index}`}
          label={label}
          sx={{
            '&.Mui-selected': {
              color: '#7D0600',
              fontWeight: 'bold',
            },
          }}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
