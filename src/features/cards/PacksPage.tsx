import React from "react";
import { useLocation } from "react-router-dom";
import { getUrlParams } from "common/utils";
import { useGetPacksQuery } from "./packsApi";
import { IGetPacksResponse } from "./packsSlice";
import { useQueryParams } from "common/hooks/useQueryParams";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  SearchPacksCard,
  TableFiltersContainer,
  NumberOfCards,
  TablePacks,
  AddNewPack,
  FiltersReset,
  AddNewCard,
  PacksPagination,
  PacksPageContainer,
  TableCards,
  ShowPacksCards
} from "common/components";


export const PacksPage = () => {

  const [searchParams, setParam, deleteParam] = useQueryParams();

  const paramsObject = getUrlParams(searchParams);

  const { data = {} as IGetPacksResponse, isLoading, isFetching } = useGetPacksQuery(paramsObject);

  const cardPacks = data.cardPacks;

  return (
    <PacksPageContainer>

      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Packs list
        </Typography>

        <AddNewPack />

      </Box>

      <TableFiltersContainer>
        <SearchPacksCard />

        <ShowPacksCards />
        {
          !isLoading && <NumberOfCards data={data} />
        }
        <FiltersReset deleteParam={deleteParam} params={searchParams} />

      </TableFiltersContainer>

      <TablePacks isFetching={isFetching} cardPacks={cardPacks} />

      <PacksPagination data={data} />

    </PacksPageContainer>
  );
};

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};