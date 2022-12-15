import React, { useState } from 'react'
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


export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
    packDeckCover: string
}

export const TablePacks = React.memo(() => {

    const cardPacks = {
        cards: [] as Array<CardType>,
        cardsTotalCount: 10,
        page: 1,
        pageCount: 10,
        packUserId: '',
        cardQuestion: '',
        sortCards: '',
        packName: '',
        packDeckCover: '',
    }

    const pack = cardPacks.cards.map((pack: any) => {
        return {
            userId: pack.user_id,
            key: pack._id,
            name: pack.name,
            cards: pack.cardsCount,
            lastCreated: pack.created.slice(0, 10).split('-').reverse().join('.'),
            createdBy: pack.user_name,
            deckCover: pack.deckCover,
            Actions: [
                {
                    icon: (
                        <SchoolOutlinedIcon
                            onClick={() => {}}
                        />
                    ),
                    status: 'allMy',
                },
                {
                    icon: (
                        <ModeEditIcon
                            onClick={() => {}}
                        />
                    ),
                    status: 'my',
                },
                {
                    icon: (
                        <DeleteOutlineIcon
                            onClick={() => {}}
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
                            <TableRow hover style={{ backgroundColor: '#EFEFEF' }}>
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
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        align="left"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {}}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.cards}</TableCell>
                                    <TableCell align="center">{row.lastCreated}</TableCell>
                                    <TableCell align="right">{row.createdBy}</TableCell>
                                    {/*<TableCell align="right">*/}
                                    {/*    {row.Actions.map((icon) => <span style={{ padding: '3px' }}>*/}
                                    {/*                    {icon.icon}*/}
                                    {/*                </span>*/}
                                    {/*    )}*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
})