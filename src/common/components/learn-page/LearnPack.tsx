import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getRandomCard } from "../../utils/getRandomCard";
import { LearnPackCompleted } from "./LearnPackCompleted";
import { LearnPackContainer } from "../LearnPackContainer";
import { useAppDispatch, useAppSelector, useQueryParams } from "../../hooks";
import { ColorRadioButtons } from "../radio-group/GrageCardRadio";
import { useGetCardsQuery, useGradeCardMutation } from "features/cards/cardsApi/cardsApi";
import { Preloader } from "../preloader/Preloader";
import {
    CardType, IGetCardsResponse,
    removeCard, selectCurrentCard, selectCurrentCards, setCards, setCurrentCard
} from "features/cards/cardsApi/cardsSlice";
import { PreloaderContainer } from "../preloader/PreloaderContainer";
import { ConditionalRender } from "../conditional-render/ConditionalRender";

export const LearnPack = () => {

    const dispatch = useAppDispatch();

    const [isNewAttempt, setNewAttempt] = useState(true);

    const [grade, setGrade] = React.useState("");

    const [showAnswer, setShowAnswer] = useState(false);

    const [searchParams] = useQueryParams();

    const packId = searchParams.get("cardsPack_id") || "";

    const unexploredCards = useAppSelector(selectCurrentCards) || [] as CardType[];

    const currentCard = useAppSelector(selectCurrentCard) || {} as CardType;

    const [gradeCard] = useGradeCardMutation();
    //todo: refactor params
    const { data = {} as IGetCardsResponse, isLoading } = useGetCardsQuery({ cardsPack_id: packId, pageCount: "100" });

    const showAnswerToggle = () => {
        setShowAnswer(!showAnswer);
    };

    const goToNextCardHandler = () => {
        const randomCard = getRandomCard(unexploredCards);
        dispatch(setCurrentCard(randomCard));
        dispatch(removeCard(randomCard._id));
        if (currentCard._id && grade) gradeCardHandler(+grade);
        setGrade("");
        showAnswerToggle();
    };

    const gradeCardHandler = async (grade: number) => {
        const data = {
            card_id: currentCard._id,
            grade
        };
        await gradeCard(data);
    };

    //todo: hide useEffect
    useEffect(() => {
        if (data.cards && data.cards.length) {
            dispatch(setCards(data.cards));
            const randomCard = getRandomCard(unexploredCards);
            dispatch(setCurrentCard(randomCard));
        }

        setNewAttempt(false);

        return () => {
            dispatch(setCurrentCard(null));
        };
    }, [isNewAttempt]);

    return (
        <PreloaderContainer condition={isLoading}
                            loader={<Preloader />}
        >
            {
                unexploredCards.length > 0
                    ? <LearnPackContainer packName={data.packName}>
                        <Typography component="h1" variant="h5">
                            {`Question:${currentCard.question}`}
                        </Typography>
                        <Typography component="p">
                            {`Number of attempts: ${currentCard.shots}`}
                        </Typography>
                        <ConditionalRender condition={showAnswer}>
                            <>
                                <Typography component="p" variant="h5">
                                    {`Answer: ${currentCard.answer}`}
                                </Typography>
                                <ColorRadioButtons value={grade} setValue={setGrade} />

                                <Button onClick={goToNextCardHandler}>
                                    next
                                </Button>
                            </>
                            <Button
                                disabled={false}
                                variant={"contained"}
                                onClick={showAnswerToggle}
                            >
                                Show answer
                            </Button>
                        </ConditionalRender>
                    </LearnPackContainer>
                    : <LearnPackCompleted packId={packId} setNewAttempt={setNewAttempt} />
            }

        </PreloaderContainer>
    );
};
