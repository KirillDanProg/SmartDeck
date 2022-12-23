import React from "react";
import { AddNewPack } from "../../common/components/mainContent/AddNewPack";
import { SearchPacksCard } from "../../common/components/mainContent/SearchPackCards";
import { ShowPacksCards } from "../PackList/ShowPacksCards";
import { NumberOfCards } from "../PackList/NumberOfCards";
import { FiltersReset } from "../../common/components/mainContent/filter-controlers/FiltersReset";
import { PacksPageContainer } from "../../common/components/mainContent/table/PacksPageContainer";
import { TableFiltersContainer } from "../../common/components/mainContent/filter-controlers/TableFiltersContainer";
import { useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TablePacks } from "../../common/components/mainContent/table/TablePacks";
import { AddNewCard } from "../../common/components/mainContent/pack-cards/AddNewCard";
import { getUrlParams } from "../../common/utils/getUrlParams";
import { useGetPacksQuery } from "./packsApi";
import { IGetPacksResponse } from "./packsSlice";
import { PaginationPacksList } from "../../common/components/mainContent/Pagination";
import { TableCards } from "../../common/components/mainContent/pack-cards/CardsPack";
import { useQueryParams } from "../../common/hooks/useQueryParams";


export const CardsPage = () => {

  const [searchParams, setParam, deleteParam] = useQueryParams();

  const paramsObject = getUrlParams(searchParams);

  const { data = {} as IGetPacksResponse, isLoading, isFetching } = useGetPacksQuery(paramsObject);

  const cardPacks = data.cardPacks;

  const packId = searchParams.get("cardsPack_id") || "";

  const { pathname } = useLocation();

  const hideTableFilters = pathname !== "/cards";

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
            ? <TablePacks isFetching={isFetching} cardPacks={cardPacks} />
            : <TableCards />
        }

        <PaginationPacksList data={data} />
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