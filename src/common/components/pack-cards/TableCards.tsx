import React  from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CardTableCell } from "./CardTableCell";
import { useGetCardsQuery } from "features/cards/cardsApi/cardsApi";
import TableSortLabel from "@mui/material/TableSortLabel";
import { CardType, IGetCardsResponse } from "features/cards/cardsApi/cardsSlice";
import { EmptyList } from "../emptyList/EmptyList";
import { getUrlParams } from "common/utils";
import { useQueryParams } from "common/hooks";
import { TableSkeleton } from "common/components/skeletons/TableSkeleton";


export const TableCards = () => {

  const [searchParams, setParam] = useQueryParams()

  const paramsObject = getUrlParams(searchParams);

  const { data = {} as IGetCardsResponse, isLoading } = useGetCardsQuery(paramsObject);

  const cards = data.cards;

  let sortCards = searchParams.get("sortCards") || "";

  //todo: super function
  const sortToggleUpdateHandler = () => {
    if (sortCards === "0updated") {
      sortCards = "1updated";
    } else {
      sortCards = "0updated";
    }
    setParam("sortCards", sortCards);
  };


  return (
    <TableContainer component={Paper}>

      {
        isLoading
          ? <TableSkeleton />
          : <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow hover style={{ backgroundColor: "#EFEFEF" }}>
                <TableCell align="left">Question</TableCell>
                <TableCell align="center">Answer</TableCell>
                <TableCell align="center">
                  <TableSortLabel direction={sortCards === `0updated` ? `asc` : `desc`}
                                  onClick={sortToggleUpdateHandler}>
                    Last Updated
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">Grade</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                cards.length > 0
                  ? cards.map((card: CardType) => (
                    <CardTableCell key={card._id}
                      cardData={card} />
                  ))
                  : <EmptyList />
              }
            </TableBody>

          </Table>
      }

    </TableContainer>
  );
};