import React from 'react'
import Button from '@mui/material/Button';
import {useCreateNewCardMutation} from '../../../../features/cards/api/cardsApi';
import {CreateNewCardRequestT} from '../../../../features/cards/api/cardsSlice';

type AddCardType = {
    cardsPack_id:string
}

export const AddNewCard:React.FC<AddCardType> = ({cardsPack_id, ...props}) => {

    const [addNewCard, {}] = useCreateNewCardMutation();
    const card:CreateNewCardRequestT = {
        cardsPack_id,
        question: 'How are you?',
        answer: 'GOOD!'

    }

    const addNewCardHandler = async () => {
        addNewCard(card)
    }

    // const [addPackModalOpen, setAddPackModalOpen] = useState(false)
    // const closeModalAddPack = () => {
    //     setAddPackModalOpen(false)
    // }

    return (
        <Button
            disabled={false}
            onClick={addNewCardHandler}
        >
            Add new card
        </Button>
    )
}