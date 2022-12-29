import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { getRandomCard } from "../../utils/getRandomCard";
import { LearnPackCompleted } from "./LearnPackCompleted";
import { LearnPackContainer } from "../LearnPackContainer";
import { useAppDispatch, useAppSelector, useQueryParams } from "../../hooks";
import { useGradeCardMutation, useLazyGetCardsQuery } from "features/packs-cards/cards/cardsApi";
import { Preloader } from "../preloader/Preloader";
import {
    CardType, IGetCardsResponse,
    removeCard, selectCurrentCard, selectCards, setCards, setCurrentCard
} from "features/packs-cards/cards/cardsSlice";
import { PreloaderContainer } from "../preloader/PreloaderContainer";
import { ConditionalRender } from "../conditional-render/ConditionalRender";
import { AnswerComponent } from "./AnswerComponent";
import { QuestionComponent } from "./QuestionComponent";

// todo: render optimization
export const LearnPack = () => {
    const dispatch = useAppDispatch();

    const [isNewAttempt, setNewAttempt] = useState(false);

    const [grade, setGrade] = React.useState(0);

    const [showAnswer, setShowAnswer] = useState(false);

    const [searchParams] = useQueryParams();

    const packId = searchParams.get("cardsPack_id") || "";

    const unexploredCards = useAppSelector(selectCards) || [] as CardType[];

    const currentCard = useAppSelector(selectCurrentCard) || {} as CardType;

    const [gradeCard] = useGradeCardMutation();

    const [getCardsTrigger, { data = {} as IGetCardsResponse, isFetching }] = useLazyGetCardsQuery();
    const showAnswerToggle = () => {
        setShowAnswer(!showAnswer);
    };

    const goToNextCardHandler = () => {

        dispatch(removeCard(currentCard._id));

        const randomCard = getRandomCard(unexploredCards);

        dispatch(setCurrentCard(randomCard));

        if (currentCard._id && grade) gradeCardHandler(grade);

        setGrade(0);
        showAnswerToggle();
    };

    const gradeCardHandler = async (grade: number) => {
        const data = { card_id: currentCard._id, grade };
        await gradeCard(data);
    };

    const tryAgain = async () => {
        await getCardsTrigger({ cardsPack_id: packId, pageCount: "100" });
    };

    //todo: hide effects
    useEffect(() => {
        tryAgain();
    }, []);

    useEffect(() => {
        if (data.cards && data.cards.length) {
            dispatch(setCards(data.cards));
            const randomCard = getRandomCard(unexploredCards);
            dispatch(setCurrentCard(randomCard));
        }

        isNewAttempt && setNewAttempt(false);

        return () => {
            dispatch(setCurrentCard(null));
        };
    }, [isNewAttempt, data]);


    return (
        <PreloaderContainer condition={isFetching}
                            loader={<Preloader />}
        >
            {
                unexploredCards.length > 0
                    ? <LearnPackContainer packName={data.packName}>

                        <QuestionComponent question={currentCard.question}
                                           shots={currentCard.shots}
                        />

                        <ConditionalRender condition={showAnswer}>
                            <AnswerComponent answer={currentCard.answer}
                                             grade={grade}
                                             setGrade={setGrade}
                                             goToNextCardHandler={goToNextCardHandler}
                            />

                            <Button disabled={false}
                                    variant={"contained"}
                                    onClick={showAnswerToggle}
                            >
                                Show answer
                            </Button>
                        </ConditionalRender>

                    </LearnPackContainer>
                    : <LearnPackCompleted packId={packId} setNewAttempt={setNewAttempt} tryAgain={tryAgain} />
            }

        </PreloaderContainer>
    );
};
