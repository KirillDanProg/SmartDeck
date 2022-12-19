import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Preloader = () => {
  return (
    <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '100vh', width: '100vw' }}>
      <CircularProgress />
    </Box>
  );
}