import React, {FC} from 'react';
import {Rating, TableCell, TableRow} from '@mui/material';
import {CardResponseType} from '../../../../features/cards/api/cardsSlice';
import {NavLink} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type PropsType = {
    cardData: CardResponseType
}

export const CardTableCell: FC<PropsType> = ({cardData}) => {

    return (
        <TableRow
            key={cardData._id}
            sx={{
                '&:last-child td, &:last-child th': {border: 0},
                cursor: 'pointer',
            }}>
            <TableCell align="left" style={{width: '30%'}}>
                <NavLink style={{textDecoration: 'none', cursor: 'pointer'}}
                         to={'/'}>{cardData.question}</NavLink>
            </TableCell>
            <TableCell style={{width: '40%'}} align="center"> <NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}>{cardData.answer}</NavLink></TableCell>
            <TableCell style={{width: '15%'}} align="center"><NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}>{cardData.updated}</NavLink></TableCell>
            <TableCell style={{width: '15%'}} align="right"> <NavLink
                style={{textDecoration: 'none', cursor: 'pointer'}}
                to={'/'}></NavLink>
                <Rating name="size-large" defaultValue={2} size="large" />
                <IconButton onClick={()=>{}} disabled={false}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

