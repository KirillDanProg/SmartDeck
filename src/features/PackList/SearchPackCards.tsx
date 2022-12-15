import React, { ChangeEvent, useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Box from '@mui/material/Box'


export const SearchPacksCard = () => {

    let namePack = ""

    const [inputValue, setInputValue] = useState(namePack)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <Box
            sx={{
                display:    'flex',
                flexDirection: 'column',
                gap: '5px',
            }}
        >
            <Typography variant="h6">Search</Typography>
            <TextField
                disabled={false}
                size={'small'}
                placeholder={'Provide your text'}
                value={inputValue}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchSharpIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}