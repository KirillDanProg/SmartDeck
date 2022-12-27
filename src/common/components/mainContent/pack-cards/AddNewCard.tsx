import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {BasicModalPacksList} from "../../modal/BasicModal";
import {CreateNewCardModal} from "../../modal/CreateNewCardModal/CreateNewcardModal";
import {RequestCreateNewCardT, useCreateNewCardMutation} from "../../../../features/cards/cardsApi/cardsApi";

type AddCardType = {
    packId: string
}

export const AddNewCard: React.FC<AddCardType> = ({packId, ...props}) => {
    const [addCardModalOpen, setAddCardModalOpen] = useState(false)
    const [addNewCard, {isLoading}] = useCreateNewCardMutation();

    const addNewCardHandler = async (data: RequestCreateNewCardT) => {
        await addNewCard({
            cardsPack_id: packId,
            question: data.question,
            answer: data.answer
        });
        setAddCardModalOpen(false)
    }

    const toggleModalAddCard = () => {
        setAddCardModalOpen(!addCardModalOpen)
    }

    return (
        <>
            <BasicModalPacksList title={"Add new card"} open={addCardModalOpen} closeModal={toggleModalAddCard}>
                <CreateNewCardModal
                    cb={addNewCardHandler}
                    disabled={isLoading}
                    packId={packId}
                    closeModal={toggleModalAddCard}
                />
            </BasicModalPacksList>
                <Button
                    disabled={false}
                    onClick={toggleModalAddCard}
                >
                    Add new card
                </Button>
        </>
    )
}

