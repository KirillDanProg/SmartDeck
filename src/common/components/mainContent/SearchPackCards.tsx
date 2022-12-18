import React, {ChangeEvent, FC, memo} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {InputAdornment} from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Box from '@mui/material/Box'
import {QueryParamsType} from "../../utils/useQueryParamsGenerator";

type PropsType = {
    setFilters: (value: QueryParamsType) => void
    filters: QueryParamsType
}
export const SearchPacksCard: FC<PropsType> = memo(({filters, setFilters}) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilters({...filters, packName: event.target.value})
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
            }}
        >
            <Typography variant="h6">Search</Typography>
            <TextField
                disabled={false}
                size={'small'}
                placeholder={'Provide your text'}
                value={filters.packName}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchSharpIcon/>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
})