import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup } from '@mui/material'
import Box from '@mui/material/Box'

const btnStyle = {
    width: '196px',
    height: '39px'
}

export const ShowPacksCards = () => {

    const [ownerPack, setOwnerPack] = useState('My')

    const onClickShowPacksHandler = (changeButton: 'All' | 'My') => {
        setOwnerPack(changeButton)
    }

    return (
            <Box>
                <Typography variant="h6">Show packs cards</Typography>

                <ButtonGroup
                    sx={btnStyle}
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                    <Button
                        disabled={false}
                        onClick={() => onClickShowPacksHandler('My')}
                        sx={btnStyle}
                        variant={ownerPack === 'My' ? 'contained' : 'outlined'}
                    >
                        My
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => onClickShowPacksHandler('All')}
                        sx={btnStyle}
                        variant={ownerPack === 'My' ? 'outlined' : 'contained'}
                    >
                        All
                    </Button>
                </ButtonGroup>
            </Box>
    )
}