import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup } from '@mui/material'
import Box from '@mui/material/Box'


export const ShowPacksCards = () => {
    const whosePackCard = 'My'
    const maxCardsCount = 10
    const minCardsCount = 1


    const onClickShowPacksHandler = (changeButton: 'All' | 'My') => {

    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}
            >
                <Typography variant="h6">Show packs cards</Typography>
                <ButtonGroup
                    sx={{
                        width: '196px',
                        height: '39px',
                    }}
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                    <Button
                        disabled={false}
                        onClick={() => onClickShowPacksHandler('My')}
                        sx={{
                            width: '196px',
                            height: '39px',
                        }}
                        variant={whosePackCard === 'My' ? 'contained' : 'outlined'}
                    >
                        My
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => onClickShowPacksHandler('All')}
                        sx={{
                            width: '196px',
                            height: '39px',
                        }}
                        variant={'outlined'}
                    >
                        All
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    )
}