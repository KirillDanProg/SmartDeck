import React, {FC, useState} from 'react'
import Typography from '@mui/material/Typography'
import {Button, ButtonGroup} from '@mui/material'
import Box from '@mui/material/Box'
import {useAppSelector} from "../../common/hooks";
import {selectCurrentUser} from "../auth/authSlice";
import {QueryParamsType} from "../../common/utils/useQueryParamsGenerator";

type PropsType = {
    filters: QueryParamsType
    setFilters: (values: QueryParamsType) => void
}
export const ShowPacksCards: FC<PropsType> = ({setFilters, filters}) => {

    const user_id = useAppSelector(selectCurrentUser)
    const [ownerPack, setOwnerPack] = useState('All')

    const onClickShowPacksHandler = (value: 'All' | 'My') => {
        setOwnerPack(value)

        if (user_id) {
            value === "My"
                ? setFilters({...filters, user_id})
                : setFilters({...filters, user_id: ""})
        }
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

const btnStyle = {
    width: '196px',
    height: '39px'
}
