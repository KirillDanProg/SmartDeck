import React from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";

export const PaginationPacksList = () => {

  const pageCount = 10;
  const cardPacksTotalCount = 5;

  const TotalCountPages = Math.round(cardPacksTotalCount / pageCount);

  const handleChangePage = () => {

  };

  const handleChangeRowsPerPage = () => {
  };

  const currentPageHandler = () => {

  };

  return (
    <div style={{ display: "flex", width: "100%", margin: "10px auto" }}>
      <Pagination
        disabled={false}
        color={"primary"}
        count={TotalCountPages}
        variant="outlined"
        shape="rounded"
        page={pageCount}
        defaultPage={1}
        onChange={currentPageHandler}
      />
      <TablePagination
        sx={{ mt: -1 }}
        component="div"
        count={cardPacksTotalCount}
        page={1}
        onPageChange={handleChangePage}
        rowsPerPage={1}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[1, 5, 10, 25]}
      />
    </div>
  );
};