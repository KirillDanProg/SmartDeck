import React from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import TableSortLabel from '@mui/material/TableSortLabel'
import Box from '@mui/material/Box'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import {useChangeNamePackMutation, useDeletePackMutation, useGetPacksQuery} from "../cards/api/packsApi";
import {useAppSelector} from "../../app/hooks";

export const TablePacks = () => {
    const {} = useGetPacksQuery()
    const [deletePack, {}] = useDeletePackMutation()
    const [changeName, {}] = useChangeNamePackMutation()

    const userId = useAppSelector(state => state.auth.userId)

    const cardPacks = useAppSelector(state => state.packs.cardPacks)

    const deletePackHandler = async (id: string) => {
        await deletePack(id)
    }

    const editeNameChangeHandler = async (_id: string) => {
        await changeName({
            name: "Pack's name changed",
            _id
        })
    }

    const pack = cardPacks.map((pack) => {

        return {
            packId: pack._id,
            userId: pack.user_id,
            key: pack.user_id,
            name: pack.name,
            cards: pack.cardsCount,
            lastUpdate: pack.created,
            createdBy: pack.user_name,
            Actions: [
                {
                    icon: (
                        <SchoolOutlinedIcon
                            onClick={() => {
                            }}
                        />
                    ),
                    status: 'allMy',
                },
                {
                    icon: (
                        <ModeEditIcon
                            onClick={() => editeNameChangeHandler(pack._id)}
                        />
                    ),
                    status: 'my',
                },
                {
                    icon: (
                        <DeleteOutlineIcon
                            onClick={() => deletePackHandler(pack._id)}
                        />
                    ),
                    status: 'my',
                },
            ],
        }
    })


    return (
        <>
            <Box
                sx={{
                    marginTop: '35px',
                    width: '100%',
                }}
            >
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="center">Cards</TableCell>
                                <TableCell align="center">
                                    <TableSortLabel
                                    >
                                        Last Update
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">Created by</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pack.map((row) => (
                                <TableRow
                                    key={row.key}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell
                                        align="left"
                                        style={{cursor: 'pointer'}}
                                        onClick={() => {
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.cards}</TableCell>
                                    <TableCell align="center">{row.lastUpdate}</TableCell>
                                    <TableCell align="right">{row.createdBy}</TableCell>
                                    <TableCell align="right">
                                        {row.Actions.map((icon) => {
                                            //todo: get userId from response
                                                if ( userId === row.userId) {
                                                    return (
                                                        <span style={{padding: '3px'}} >
                                        {icon.icon}
                                            </span>
                                                    )
                                                } else if (icon.status === 'allMy') {
                                                    return (
                                                        <span style={{padding: '3px'}} >
                                        {icon.icon}
                                            </span>
                                                    )
                                                }
                                            }
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}