import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <CircularProgress color='secondary' />
    </Box>
  )
}
