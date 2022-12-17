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
import {PackTableCell} from "./PackTableCell";
import {useGetPacksQuery} from "../../../../features/cards/api/packsApi";

export const TablePacks = () => {
    const {data} = useGetPacksQuery()

    const cardPacks = data && data.cardPacks || []

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Cards</TableCell>
                        <TableCell align="center">
                            <TableSortLabel>
                                Last Update
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">Created by</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cardPacks.map((data) => (
                            <PackTableCell packData={data}/>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}