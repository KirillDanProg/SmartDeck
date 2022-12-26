import React, { useEffect, useState } from "react";
import {
    CardType,
    IGetCardsResponse,
    removeCard, selectCurrentCard, selectCurrentCards, setCards, setCurrentCard
} from "features/cards/cardsApi/cardsSlice";
import { useGetCardsQuery, useGradeCardMutation } from "features/cards/cardsApi/cardsApi";
import { useAppDispatch, useAppSelector, useQueryParams } from "../../hooks";
import Button from "@mui/material/Button";
import { getRandomCard } from "../../utils/getRandomCard";
import { LearnPackCompleted } from "./LearnPackCompleted";
import { LoginSkeleton } from "../skeletons/LoginSkeleton";
import { ColorRadioButtons } from "../radio-group/GrageCardRadio";

export const LearnPack = () => {

    const dispatch = useAppDispatch();

    const [searchParams] = useQueryParams();

    const [gradeCard] = useGradeCardMutation();

    const [isNewAttempt, setNewAttempt] = useState(false);

    const [grade, setGrade] = React.useState("");

    const packId = searchParams.get("cardsPack_id") || "";

    const unexploredCards = useAppSelector(selectCurrentCards);

    const currentCard = useAppSelector(selectCurrentCard) || {} as CardType;

    const { data = {} as IGetCardsResponse, isLoading } = useGetCardsQuery({ cardsPack_id: packId, pageCount: "100" });

    const goToNextCardHandler = () => {
        const randomCard = getRandomCard(unexploredCards);
        dispatch(setCurrentCard(randomCard));
        dispatch(removeCard(randomCard._id));
        if (currentCard._id && grade) gradeCardHandler(+grade);
        setGrade("");
    };

    const gradeCardHandler = async (grade: number) => {
        const data = {
            card_id: currentCard._id,
            grade
        };
        await gradeCard(data);
    };

    useEffect(() => {
        if (data.cards && data.cards.length) {
            dispatch(setCards(data.cards));
            dispatch(setCurrentCard(null));
        }
        setNewAttempt(false);

        return () => {
            dispatch(setCurrentCard(null));
        };
    }, [isNewAttempt]);


    return (
        <>
            {
                isLoading ? <LoginSkeleton />
                    : unexploredCards.length > 0
                        ? <>
                            <h1>
                                {isLoading ? "...loading" : currentCard?.answer}
                            </h1>
                            <ColorRadioButtons value={grade} setValue={setGrade} />
                            <Button onClick={goToNextCardHandler}>
                                next
                            </Button>
                        </>
                        : <LearnPackCompleted packId={packId} setNewAttempt={setNewAttempt} />
            }
        </>
    );
};

