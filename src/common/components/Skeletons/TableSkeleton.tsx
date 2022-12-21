import React from 'react';
import {Outlet, useParams, useSearchParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import {IGetPacksResponse} from "../../../features/cards/packsSlice";
import {ShowPacksCards} from "../../../features/PackList/ShowPacksCards";
import {TablePacks} from "../mainContent/table/TablePacks";
import {TableFiltersContainer} from "../mainContent/filter-controlers/TableFiltersContainer";
import {getUrlParams} from "../../utils/getUrlParams";
import {FiltersReset} from "../mainContent/filter-controlers/FiltersReset";
import {NumberOfCards} from "../../../features/PackList/NumberOfCards";
import {PaginationPacksList} from "../mainContent/Pagination";
import {useGetPacksQuery} from "../../../features/cards/packsApi";
import {PacksPageContainer} from "../mainContent/table/PacksPageContainer";
import {HeaderSkeleton} from "./HeaderSkeleton";
import Skeleton from "@mui/material/Skeleton";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import {PackTableCell} from "../mainContent/table/PackTableCell";


//todo: render optimization


export const TableSkeleton = () => {
    const [params, setParams] = useSearchParams();

    const paramsObject = getUrlParams(params)

    const {data = {} as IGetPacksResponse, isLoading, isFetching} = useGetPacksQuery(paramsObject);

    const cardPacks = data.cardPacks;

    const {packId} = useParams();

    const hideTableFilters = !packId;

    const disabled = isLoading || isFetching

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