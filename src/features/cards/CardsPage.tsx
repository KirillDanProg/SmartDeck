import React from "react";
import { useLocation } from "react-router-dom";
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
  AddNewCard,
  PacksPagination,
  PacksPageContainer,
  TableCards,
  ShowPacksCards
} from "common/components";


export const CardsPage = () => {

  const [searchParams, setParam, deleteParam] = useQueryParams();

  const paramsObject = getUrlParams(searchParams);

  const { data = {} as IGetPacksResponse, isLoading, isFetching } = useGetPacksQuery(paramsObject);

  const cardPacks = data.cardPacks;

  const packId = searchParams.get("cardsPack_id") || "";

  const { pathname } = useLocation();

  const hideTableFilters = pathname !== "/cards";

  let sortPacks = searchParams.get('sortPacks') || '';

  const sortToggleUpdateHandler = () => {
    sortToggle(sortPacks, 'updated', setParam, 'sortPacks');
  };
  return (
    <PacksPageContainer>
      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {hideTableFilters ? "Packs list" : "My pack"}
        </Typography>

        {hideTableFilters ? <AddNewPack /> : <AddNewCard packId={packId} />}
      </Box>

      <>

        <TableFiltersContainer>
          <SearchPacksCard />
          {
            hideTableFilters && <>
              <ShowPacksCards />
              {
                !isLoading && <NumberOfCards data={data} />
              }
              <FiltersReset deleteParam={deleteParam} params={searchParams} />
            </>
          }

        </TableFiltersContainer>

        {
          hideTableFilters
            ? <TablePacks isFetching={isFetching}
                          cardPacks={cardPacks}
                          sortToggle={sortToggleUpdateHandler}
                          sortPacks={sortPacks}
                          setParam={setParam}
              />
            : <TableCards />
        }

        <PacksPagination data={data} />
      </>

    </PacksPageContainer>
  );
};

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};