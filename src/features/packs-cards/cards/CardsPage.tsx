import {getUrlParams} from "common/utils";
import {useAppSelector, useQueryParams} from "common/hooks";
import {Typography, Box} from "@mui/material";
import {
  AddNewCard,
  PacksPageContainer,
  PacksPagination,
  SearchPacksCard,
  TableCards,
  TableFiltersContainer,
  GoToPrevPageComponent,
  PackOptionsMenu,
  Preloader
} from "common/components";
import {IGetCardsResponse} from "./cardsSlice";
import {useGetCardsQuery} from "./cardsApi";
import {
  CreateNewPackRequestType,
  useChangeNamePackMutation
} from "../packs/packsApi";
import {selectCurrentUser} from "features/auth/authSlice";

export const CardsPage = () => {
  const [searchParams] = useQueryParams();
  const [changeName] = useChangeNamePackMutation();
  const paramsObject = getUrlParams(searchParams);
  const {data = {} as IGetCardsResponse, isLoading} =
    useGetCardsQuery(paramsObject);
  const packId = searchParams.get("cardsPack_id") || "";
  const userId = useAppSelector(selectCurrentUser);
  const packOwner = userId === packId;

  const editeHandler = async (e: CreateNewPackRequestType) => {
    await changeName({
      name: e.name,
      _id: packId
    });
  };

  return (
    <PacksPageContainer>
      <>
        <GoToPrevPageComponent />

        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{display: "flex", alignItems: "center", fontWeight: "bold"}}
          >
            {data.packName}
            <PackOptionsMenu
              isOwner={packOwner}
              cb={editeHandler}
              packId={packId}
              packName={data.packName}
            />
          </Typography>

          <AddNewCard packId={packId} />
        </Box>

        <TableFiltersContainer>
          <SearchPacksCard />
        </TableFiltersContainer>

        <TableCards />
        {!isLoading && (
          <PacksPagination
            pageProps={data.page}
            pageCountProps={data.pageCount}
            totalCount={data.cardsTotalCount}
          />
        )}
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
