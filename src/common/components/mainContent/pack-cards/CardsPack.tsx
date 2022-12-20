import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material'
import {CardTableCell} from './CardTableCell';
import {useGetCardsQuery} from '../../../../features/cards/api/cardsApi';
import TableSortLabel from '@mui/material/TableSortLabel'
import {CardResponseType} from '../../../../features/cards/api/cardsSlice';
import {useParams} from 'react-router-dom';


export const TableCards = () => {
    const {packId = ''} = useParams();
    const {data} = useGetCardsQuery(packId);
    const cardPacks = data && data.cards;
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                        <TableCell align="left">Question</TableCell>
                        <TableCell align="center">Answer</TableCell>
                        <TableCell align="center">
                            <TableSortLabel>
                                Last Updated
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cardPacks?.map((card: CardResponseType) => (
                            <CardTableCell cardData={card}/>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}