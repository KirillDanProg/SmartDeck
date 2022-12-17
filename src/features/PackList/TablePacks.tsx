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

export const TablePacks = React.memo(() => {


    const mappedPacksTableCell = [] as any


    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Cards</TableCell>
                        <TableCell align="center">
                            <TableSortLabel>Last Update</TableSortLabel>
                        </TableCell>
                        <TableCell align="right">Created by</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        mappedPacksTableCell
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
})
