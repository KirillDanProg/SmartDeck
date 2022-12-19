import React, {FC} from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import {QueryParamsType} from "../../utils/useQueryParamsGenerator";
import {IGetPacksResponse} from "../../../features/cards/packsSlice";

type PropsType = {
    filters: QueryParamsType
    setFilters: (values: QueryParamsType) => void
    data: IGetPacksResponse | undefined
}

export const PaginationPacksList: FC<PropsType> = ({filters, setFilters, data}) => {

    console.log("filters ", filters)
    console.log("setFilters ", setFilters)
    console.log("data ", data);

    const page = data?.page || 1
    const pageCount = data?.pageCount || 1;
    const cardPacksTotalCount = data?.cardPacksTotalCount || 1;

    const TotalCountPages = Math.round(cardPacksTotalCount / pageCount);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setFilters({...filters, page: (newPage + "") })
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFilters({...filters, pageCount: (parseInt(event.target.value, 10) + "") })
    }

    const currentPageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        setFilters({...filters, page: (page + "")})
    };

    return (
        <Box style={style}>
            {/*<Pagination*/}
            {/*    disabled={false}*/}
            {/*    color={"primary"}*/}
            {/*    count={TotalCountPages}*/}
            {/*    variant="outlined"*/}
            {/*    shape="rounded"*/}
            {/*    page={page}*/}
            {/*    defaultPage={1}*/}
            {/*    onChange={currentPageHandler}*/}
            {/*/>*/}
            <TablePagination
                sx={{mt: -1}}
                component="div"
                count={cardPacksTotalCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={pageCount}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[1, 5, 10, 25]}
            />
        </Box>
    );
};

const style = {display: "flex", width: "100%", margin: "10px auto"}