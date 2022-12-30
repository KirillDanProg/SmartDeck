import { PackTableCell } from "./PackTableCell";
import { PackResponseType } from "features/packs-cards/packs/packsSlice";
import React, { FC, memo } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import { EmptyList } from "../emptyList/EmptyList";
import {TableSkeleton} from "../skeletons/TableSkeleton";

type PropsType = {
    cardPacks: PackResponseType[]
    isFetching: boolean
    sortToggle: (sortBy: string, sortParam: string, setParam: (paramKey:string, sortBy:string)=>void, paramKey: string) => void
    sortPacks: string
    setParam:any
}
export const TablePacks: FC<PropsType> = memo(({cardPacks, isFetching, sortPacks, sortToggle,setParam}) => {

    return (
        <TableContainer component={Paper}>
            {
                isFetching ?
                    <TableSkeleton/>
                    : <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="center">Cards</TableCell>
                                <TableCell align="center">
                                    <TableSortLabel
                                        direction={sortPacks === `0updated` ? `asc` : `desc`}
                                        onClick={()=>sortToggle(sortPacks,'updated',setParam,'sortPacks')}>
                                        Last Update
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">Created by</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                cardPacks.length > 0
                                    ? cardPacks.map((data) => (
                                        <PackTableCell disabled={isFetching}
                                                       key={data._id}
                                                       packData={data}/>
                                    ))
                                    : <EmptyList/>
                            }
                        </TableBody>
                    </Table>
            }

        </TableContainer>
    );
});