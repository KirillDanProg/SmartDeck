import React, { FC } from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useQueryParams } from "common/hooks";
import {IGetPacksResponse} from "../../../features/packs-cards/packs/packsSlice";

//todo fix data for pagination
type PropsType = {
  data: any
}

export const PacksPagination: FC<PropsType> = ({ data }) => {

  const [searchParams, setParam] = useQueryParams();

  const page = searchParams.get("page") || data.page;
  const pageCount = searchParams.get("pageCount") || data.pageCount;
  const cardPacksTotalCount = data.cardPacksTotalCount;

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
        rowsPerPageOptions={[1, 5, 10, 25]}
      />
    </Box>
  );
};

const style = { display: "flex", width: "100%", margin: "10px auto" };