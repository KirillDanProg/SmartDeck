import React from "react";
import {getUrlParams} from "common/utils";
import {useQueryParams} from "common/hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  AddNewCard,
  PacksPageContainer,
  PacksPagination,
  SearchPacksCard,
  TableCards,
  TableFiltersContainer
} from "common/components";
import {IGetCardsResponse} from "./cardsSlice";
import {useGetCardsQuery} from "./cardsApi";
import {GoToPrevPageComponent} from "common/components/go-to-prev-page/GoToPrevPageComponent";
import {ModalForMyPack} from "../../../common/components/modal/ModalForMyPack";
import {
  CreateNewPackRequestType,
  useChangeNamePackMutation
} from "../packs/packsApi";

export const CardsPage = () => {
  const [searchParams] = useQueryParams();
  const paramsObject = getUrlParams(searchParams);
  const [changeName, {isLoading}] = useChangeNamePackMutation();

  const editeHandler = async (e: CreateNewPackRequestType) => {
    await changeName({
      name: e.name,
      _id: packId
    });
  };

  const {data = {} as IGetCardsResponse} = useGetCardsQuery(paramsObject);
  const packId = searchParams.get("cardsPack_id") || "";
  const packName = data.packName;

  return (
    <PacksPageContainer>
      <GoToPrevPageComponent />

      <Box sx={style}>
        <Typography
          variant="h5"
          sx={{display: "flex", alignItems: "center", fontWeight: "bold"}}
        >
          {packName}
          <ModalForMyPack
            isLoading={isLoading}
            cb={editeHandler}
            packId={packId}
            packName={packName}
          />
        </Typography>

        <AddNewCard packId={packId} />
      </Box>

      <TableFiltersContainer>
        <SearchPacksCard />
      </TableFiltersContainer>

      <TableCards />

      <PacksPagination
        pageProps={data.page}
        pageCountProps={data.pageCount}
        totalCount={data.cardsTotalCount}
      />
    </PacksPageContainer>
  );
};

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};
