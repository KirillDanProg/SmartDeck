import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {useCreateNewCardMutation} from '../../../../features/cards/api/cardsApi';
import {CreateNewCardRequestT} from '../../../../features/cards/api/cardsSlice';
import {useFormik} from 'formik';
import TextField from '@mui/material/TextField';

type AddCardType = {
    cardsPack_id: string
}

export const AddNewCard: React.FC<AddCardType> = ({cardsPack_id, ...props}) => {
    const [addCardModalOpen, setAddCardModalOpen] = useState(false)
    const [addNewCard, {}] = useCreateNewCardMutation();
    const card: CreateNewCardRequestT = {
        cardsPack_id,
        question: 'How are you?',
        answer: 'GOOD!'
    }

    const openModalAddCard = () => {
        setAddCardModalOpen(true)
    }
    const closeModalAddPack = (e: boolean) => {
        setAddCardModalOpen(e)
    }


    const formik = useFormik({
        initialValues: {
            question: ''
        },
        onSubmit: values => {
            addNewCard({
                cardsPack_id,
                question: values.question,
                answer: 'GOOD!'
            });
            formik.resetForm();
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Button
                    type="submit"
                    disabled={false}
                >
                    Add new card
                </Button>
                <TextField
                    {...formik.getFieldProps('question')}
                />
            </form>
        </>
    )
}

