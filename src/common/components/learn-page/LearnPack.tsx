import React, { useEffect, useState } from "react";
import {
  IGetCardsResponse,
  removeCard, selectCurrentCard, selectCurrentCards, setCards, setCurrentCard
} from "features/cards/cardsApi/cardsSlice";
import { useGetCardsQuery } from "features/cards/cardsApi/cardsApi";
import { useAppDispatch, useAppSelector, useQueryParams } from "../../hooks";
import Button from "@mui/material/Button";
import { getRandomCard } from "../../utils/getRandomCard";
import { LearnPackCompleted } from "./LearnPackCompleted";
import { LoginSkeleton } from "../skeletons/LoginSkeleton";

export const LearnPack = () => {

  const dispatch = useAppDispatch();

  const [searchParams] = useQueryParams()

  const [isNewAttempt, setNewAttempt] = useState(false)

  const packId = searchParams.get("cardsPack_id") || ""

  const unexploredCards = useAppSelector(selectCurrentCards);

  const currentCard = useAppSelector(selectCurrentCard);

  const {data = {} as IGetCardsResponse, isLoading } = useGetCardsQuery({ cardsPack_id: packId, pageCount: "100" });

  const goToNextCardHandler = () => {
    const randomCard = getRandomCard(unexploredCards);
    dispatch(setCurrentCard(randomCard));
    dispatch(removeCard(randomCard._id));
  };

  useEffect(() => {
    if(data.cards && data.cards.length) {
      dispatch(setCards(data.cards))
      dispatch(setCurrentCard(null))
    }
    setNewAttempt(false)
  }, [isNewAttempt])

  useEffect(() => {
    return () => {
      dispatch(setCurrentCard(null))
    }
  }, [])

  return (
    <>
      {
        isLoading ? <LoginSkeleton />
          : unexploredCards.length > 0
            ? <>
              <h1>
                {isLoading ? "...loading" : currentCard?.answer}
              </h1>
              <Button onClick={goToNextCardHandler}>
                next
              </Button>
            </>
            : <LearnPackCompleted packId={packId} setNewAttempt={setNewAttempt}/>
      }
    </>
  );
};

