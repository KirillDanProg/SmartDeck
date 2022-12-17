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
import {CardTableCell} from './CardTableCell';
import {useGetCardsQuery} from '../../../../features/cards/api/cardsApi';
import TableSortLabel from '@mui/material/TableSortLabel'
import {CardResponseType} from '../../../../features/cards/api/cardsSlice';

const cards = [
    {
        answer: '1',
        question: 'ANSWER',
        cardsPack_id: '1',
        grade: 2,
        shots: 1,
        user_id: '1',
        created: '1111111111111111111',
        updated: '11111111111111111111111111111',
        _id: '11111'
    },
    {
        answer: '2',
        question: 'ANSWER',
        cardsPack_id: '1',
        grade: 2,
        shots: 1,
        user_id: '1',
        created: '1111111111111111111',
        updated: '11111111111111111111111111111',
        _id: '11111'
    },
    {
        answer: '3',
        question: 'ANSWER',
        cardsPack_id: '1',
        grade: 2,
        shots: 1,
        user_id: '1',
        created: '1111111111111111111',
        updated: '11111111111111111111111111111',
        _id: '11111'
    },
]


export const TableCards = () => {
    const {data} = useGetCardsQuery();
    // const cardPacks = data && data.cards;
    const cardPacks = cards;
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
                        <TableCell align="right">Grade</TableCell>
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