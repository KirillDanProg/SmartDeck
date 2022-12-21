import {PackTableCell} from './PackTableCell';
import {PackResponseType} from '../../../../features/cards/packsSlice';
import React, {FC, memo} from 'react'
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

type PropsType = {
    cardPacks:  PackResponseType[]
    disabled: boolean
}
export const TablePacks:FC<PropsType> = memo(({cardPacks, disabled}) => {

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Cards</TableCell>
            <TableCell align="center">
              <TableSortLabel >
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
              <PackTableCell disabled={disabled} key={data._id}
                packData={data}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
})