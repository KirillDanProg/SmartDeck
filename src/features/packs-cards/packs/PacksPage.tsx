import React from "react";
import {getUrlParams, sortToggle} from 'common/utils';
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
  PacksPagination,
  PacksPageContainer,
  ShowPacksCards
} from "common/components";


export const PacksPage = () => {

    const [searchParams, setParam, deleteParam] = useQueryParams();

    const paramsObject = getUrlParams(searchParams);

    const {data = {} as IGetPacksResponse, isLoading, isFetching} = useGetPacksQuery(paramsObject);

    const cardPacks = data.cardPacks;

  let sortPacks = searchParams.get('sortPacks') || '';
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

      <TablePacks isFetching={isFetching} cardPacks={cardPacks} sortPacks={sortPacks} setParam={setParam} sortToggle={sortToggle} />

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