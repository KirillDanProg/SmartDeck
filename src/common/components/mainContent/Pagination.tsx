import React, {FC, useEffect, useState} from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import {IGetPacksResponse} from "../../../features/cards/packsSlice";
import {useSearchParams} from "react-router-dom";

type PropsType = {
    data: IGetPacksResponse
}

export const PaginationPacksList: FC<PropsType> = ({ data}) => {

    const [params, setParams] = useSearchParams();

    const [changePage, setChangePage] = useState('')
    // const [changePageCount, setChangePageCount] = useState('')

    useEffect(() => {
        setParams(params);
    }, [changePage,
        // changePageCount
    ]);

    const page = params.get('page') || 1
    const pageCount = params.get('pageCount') || 1;
    const cardPacksTotalCount = data.cardPacksTotalCount || 1;

    const totalCountPages = Math.round(cardPacksTotalCount / +pageCount);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        params.set('page', String(newPage))
        setChangePage(String(newPage))
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        params.set('pageCount', String(event.target.value))
        // setChangePageCount(String(event.target.value))
        setChangePage(String(event.target.value))
    }

    const currentPageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        params.set('page', String(page))
        setChangePage(String(page))
    };

    return (
        <Box style={style}>
            <Pagination
                disabled={false}
                color={"primary"}
                count={totalCountPages}
                variant="outlined"
                shape="rounded"
                page={+page}
                defaultPage={1}
                onChange={currentPageHandler}
            />
            <TablePagination
                sx={{mt: -1}}
                component="div"
                count={cardPacksTotalCount}
                page={+page}
                onPageChange={handleChangePage}
                rowsPerPage={+pageCount}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[1, 5, 10, 25]}
            />
        </Box>
    );
};

const style = {display: "flex", width: "100%", margin: "10px auto"}