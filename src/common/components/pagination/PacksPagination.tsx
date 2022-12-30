import React, { FC } from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useQueryParams } from "common/hooks";

//todo fix data for pagination
type PropsType = {
    pageProps: number
    pageCountProps: number
    totalCount: number
}

export const PacksPagination: FC<PropsType> = ({ pageProps,  pageCountProps, totalCount}) => {

    const [searchParams, setParam] = useQueryParams();

    const page = searchParams.get("page") || pageProps;
    const pageCount = searchParams.get("pageCount") || pageCountProps;
    const cardPacksTotalCount = totalCount;


    const totalCountPages = Math.round(cardPacksTotalCount / +pageCount);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setParam("page", String(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setParam("pageCount", String(event.target.value));
    };

    const currentPageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        setParam("page", String(page));
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
                sx={{ mt: -1 }}
                component="div"
                count={cardPacksTotalCount}
                page={+page}
                onPageChange={handleChangePage}
                rowsPerPage={+pageCount}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[1, 4, 5, 10, 25]}
            />
        </Box>
    );
};

const style = { display: "flex", width: "100%", margin: "10px auto" };