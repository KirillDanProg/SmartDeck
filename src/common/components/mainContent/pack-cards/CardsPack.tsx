import React  from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CardTableCell } from "./CardTableCell";
import { useGetCardsQuery } from "../../../../features/cards/api/cardsApi";
import TableSortLabel from "@mui/material/TableSortLabel";
import { CardResponseType, IGetCardsResponse } from "../../../../features/cards/api/cardsSlice";
import { useSearchParams } from "react-router-dom";
import { getUrlParams } from "../../../utils/getUrlParams";
import { EmptyList } from "../../emptyList/EmptyList";
import { Preloader } from "../../Preloader";

export const TableCards = () => {
  const [params, setParams] = useSearchParams();
  const paramsObject = getUrlParams(params);
  const { data = {} as IGetCardsResponse, isLoading } = useGetCardsQuery(paramsObject);
  let sortCards = params.get("sortCards") || "";
  //todo: super function
  const sortToggleUpdateHandler = () => {
    if (sortCards === "0updated") {
      sortCards = "1updated";
    } else {
      sortCards = "0updated";
    }
    params.set("sortCards", sortCards);
    setParams(params);
  };

  const cards = data.cards;

  return (
    <TableContainer component={Paper}>

      {
        isLoading
          ? <Preloader />
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
                  ? cards.map((card: CardResponseType) => (
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