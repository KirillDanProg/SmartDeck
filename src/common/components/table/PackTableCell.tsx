import React, {FC} from 'react';
import {TableCell, TableRow} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export interface INewPackResponseNewCardsPack {
    _id: string;
    user_id: string;
    user_name: string;
    private: boolean;
    name: string;
    path: string;
    grade: number;
    shots: number;
    cardsCount: number;
    type: string;
    rating: number;
    created: string;
    updated: string;
    more_id: string;
    __v: number;
}

type PropsType = {
    packData: INewPackResponseNewCardsPack | any
}

export const PackTableCell: FC<PropsType> = ({packData}) => {
    return (
        <TableRow
            key={packData._id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="left" style={{cursor: 'pointer'}}>
                {packData.name}
            </TableCell>
            <TableCell align="center">{packData.cardsCount}</TableCell>
            <TableCell align="center">{packData.updated}</TableCell>
            <TableCell align="right">{packData.created}</TableCell>
            <TableCell align="right" sx={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>

                <SchoolOutlinedIcon/>
                <ModeEditIcon/>
                <DeleteOutlineIcon/>

            </TableCell>
        </TableRow>
    );
};

