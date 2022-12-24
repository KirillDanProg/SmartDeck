import {ReturnComponent} from '../returnComponent/ReturnComponent';
import React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import  Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';

export const NamePack = () => {

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'flex-start',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          height: '100vh',
        }}
        direction={{ sm: 'row' }}
        spacing={{ xs: 30 }}
      >
        <Stack sx={{ m: 3, alignItems: 'center' }}>
          <ReturnComponent/>
          <Typography variant="h5">Name Pack</Typography>
        </Stack>
        <Stack
          sx={{
            direction: 'column',
            alignItems: 'center',
          }}
          pt={30}
        >
          <Typography
            sx={{
              color: '#838383',
            }}
            mb={2}
            variant="subtitle1"
          >
                            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button variant={'contained'} sx={{
            borderRadius: '30px',
            margin: '20px'
          }}
          >Add new card</Button>
        </Stack>
      </Stack>
    </Container>
  )
}