import React, {FC} from 'react';
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type GridContainerT = {
    children: React.ReactNode
    packName:React.ReactNode
}

export const CustomLearnPackGridGridContainer:FC<GridContainerT> = ({children, packName}) => {
  return (
      <Container
          maxWidth="sm"
          sx={{
              display: 'flex',
              minHeight: '40vh',
              justifyContent: 'center',
          }}
      >
          <Paper elevation={0} sx={{
              display: 'flex',
              justifyContent: 'center',
              textAlign:'center',
              mt: 7,
              p: 3,
              width: 550,
              height: 200,
              position: 'absolute',
              padding:'10px'

          }} >
              {packName}
          </Paper>
          <Paper
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 7,
                  p: 3,
                  width: 550,
                  height: 220,
                  position: 'absolute',
                  top: '20%'
              }}
          >
              <Stack sx={{alignItems: 'justify', justifyContent: 'space-around'}}>
                  {children}
              </Stack>
          </Paper>
      </Container>
  );
};

