import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material'
import {CardTableCell} from './CardTableCell';
import {useGetCardsQuery} from '../../../../features/cards/api/cardsApi';
import TableSortLabel from '@mui/material/TableSortLabel'
import {CardResponseType, IGetCardRequest, IGetCardsResponse} from '../../../../features/cards/api/cardsSlice';
import {useParams, useSearchParams} from 'react-router-dom';
import {getUrlParams} from '../../../utils/getUrlParams';



export const TableCards = () => {
    //с хардкодом работает
    const [params, setParams] = useSearchParams({cardsPack_id:'639e269ac7270c4efc6205a4',sortCards:'1updated'});
    const paramsObject = getUrlParams(params);

    const {packId = ''} = useParams();
    const {data = {} as IGetCardsResponse, isLoading, isSuccess} = useGetCardsQuery(paramsObject);

    console.log(paramsObject)
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