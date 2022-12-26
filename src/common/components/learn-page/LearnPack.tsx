import React, {useEffect, useState} from 'react';
import {
    IGetCardsResponse,
    removeCard, selectCurrentCard, selectCurrentCards, setCards, setCurrentCard
} from 'features/cards/cardsApi/cardsSlice';
import {useGetCardsQuery} from 'features/cards/cardsApi/cardsApi';
import {useAppDispatch, useAppSelector, useQueryParams} from '../../hooks';
import Button from '@mui/material/Button';
import {getRandomCard} from '../../utils/getRandomCard';
import {LearnPackCompleted} from './LearnPackCompleted';
import {LoginSkeleton} from '../skeletons/LoginSkeleton';
import {CustomGridContainer} from '../CustomGridContainer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Form} from '../form/Form';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {CustomLearnPackGridGridContainer} from '../CustomLearnPackGridContainer';

export const LearnPack = () => {

    const dispatch = useAppDispatch();

    const [searchParams] = useQueryParams()

    const [isNewAttempt, setNewAttempt] = useState(false)

    const packId = searchParams.get('cardsPack_id') || ''

    const unexploredCards = useAppSelector(selectCurrentCards);

    const currentCard = useAppSelector(selectCurrentCard);

    const {data = {} as IGetCardsResponse, isLoading} = useGetCardsQuery({cardsPack_id: packId, pageCount: '100'});

    const goToNextCardHandler = () => {
        const randomCard = getRandomCard(unexploredCards);
        dispatch(setCurrentCard(randomCard));
        dispatch(removeCard(randomCard._id));
    };

    useEffect(() => {
        if (data.cards && data.cards.length) {
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
                isLoading ? <LoginSkeleton/>
                    : unexploredCards.length > 0
                        ? <CustomLearnPackGridGridContainer packName={
                            <h1>{`Learn "${data.packName}"`}</h1>
                        }>
                            <Typography component="h1" variant="h5">
                                {`Question:${currentCard?.question}`}
                            </Typography>
                            <Typography component="h1" variant="h6">
                                {`Number of attempts to answer the question:${currentCard?.shots}`}
                            </Typography>
                            <Button
                                disabled={false}
                                variant={'contained'}
                                onClick={goToNextCardHandler}
                            >
                                Show answer
                            </Button>
                        </CustomLearnPackGridGridContainer>


                        : <LearnPackCompleted packId={packId} setNewAttempt={setNewAttempt}/>
            }
        </>
    );
};

// <h2>
//     {isLoading ? '...loading' : currentCard?.answer}
// </h2>