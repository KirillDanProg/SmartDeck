import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import {IGetPacksResponse} from "../../../features/cards/packsSlice";
import {TableFiltersContainer} from "../mainContent/filter-controlers/TableFiltersContainer";
import {getUrlParams} from "../../utils/getUrlParams";
import {useGetPacksQuery} from "../../../features/cards/packsApi";
import {PacksPageContainer} from "../mainContent/table/PacksPageContainer";
import {HeaderSkeleton} from "./HeaderSkeleton";
import Skeleton from "@mui/material/Skeleton";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


//todo: render optimization


export const TableSkeleton = () => {

    return (
        <>
            <HeaderSkeleton/>
            <PacksPageContainer>

                <Box sx={style}>
                    <Skeleton variant={'rounded'} sx={{height: '75px', width: '40%'}}/>
                    <Skeleton variant={'rounded'} sx={{height: '75px', width: '30%'}}/>
                </Box>
                        <TableFiltersContainer>
                            <Skeleton variant={'rounded'} sx={{height: '55px', width: '40%'}}/>
                            <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                            <Skeleton variant={'rounded'} sx={{height: '55px', width: '20%'}}/>
                            <Skeleton variant={'rounded'} sx={{height: '55px', width: '3%'}}/>
                        </TableFiltersContainer>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow hover style={{backgroundColor: '#EFEFEF'}}>
                                <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                                <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                                <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                                <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                                <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Skeleton variant={'rounded'} sx={{height: '55px', width: '10%'}}/>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Skeleton variant={'rounded'} sx={{marginTop: '40px',height: '55px', width: '100%'}}/>
            </PacksPageContainer>
        </>
    );
};

const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};