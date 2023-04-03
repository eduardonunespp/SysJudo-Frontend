import { Box, CircularProgress } from '@mui/material';

export function Loading(){
  return (
    <Box sx={{width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress size={250} thickness={.5}/>

    </Box>
  
  )
}