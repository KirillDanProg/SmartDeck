import React, {FC} from 'react';
import {TableCell, TableRow} from '@mui/material';
import {CardResponseType} from '../../../../features/cards/api/cardsSlice';

type PropsType = {
    cardData: CardResponseType
}

export const CardTableCell: FC<PropsType> = ({cardData}) => {

    // const userId = useAppSelector(selectCurrentUser)
    // const packOwner = userId === cardData.user_id


    return (
        <TableRow
            key={cardData._id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="left" style={{cursor: 'pointer', width: '30%'}}>
                {cardData.question}
            </TableCell>
            <TableCell style={{width: '40%'}} align="center">{cardData.answer}</TableCell>
            <TableCell style={{width: '20%'}} align="center">{cardData.updated}</TableCell>
            <TableCell style={{width: '10%'}} align="right">{cardData.grade}</TableCell>
            {/*<TableCell align="right" sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>*/}

            {/*{*/}
            {/*    packOwner*/}
            {/*        ? <>*/}
            {/*<SchoolOutlinedIcon />*/}
            {/*<ModeEditIcon onClick={editeNameChangeHandler}/>*/}
            {/*<DeleteOutlineIcon onClick={deletePackHandler} />*/}
            {/*        </>*/}

            {/*        : <SchoolOutlinedIcon/>*/}
            {/*}*/}
            {/*</TableCell>*/}
        </TableRow>
    );
};

