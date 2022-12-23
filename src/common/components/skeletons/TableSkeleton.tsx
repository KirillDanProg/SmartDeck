import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Table } from "@mui/material";

export const TableSkeleton = () => {


  return (
    <Table sx={boxStyle}>
      {/*<Box sx={{*/}
      {/*  display: "flex",*/}
      {/*  justifyContent: "space-between"*/}
      {/*}}>*/}
      {/*  <Skeleton width="20%" height={85} style={{}} />*/}
      {/*  <Skeleton width="20%" height={85} style={{}} />*/}
      {/*  <Skeleton width="25%" height={85} style={{}} />*/}
      {/*  <Skeleton width="5%" height={85} style={{}} />*/}
      {/*</Box>*/}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
        <Skeleton width="100%" height={55} style={{ marginBottom: "-20px" }} />
        <Skeleton width="100%" height={65} style={style} />
        <Skeleton width="100%" height={65} style={style} />
        <Skeleton width="100%" height={65} style={style} />
        <Skeleton width="100%" height={65} style={style} />
      </Box>

    </Table>
  );

};

const style = {
  marginBottom: -15
};
const boxStyle = {
};