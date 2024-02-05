import React, {useState} from "react";
import Button from "@mui/material/Button";
import {CreateNewCardModal} from "../modal/CreateNewCardModal/CreateNewcardModal";
import {BasicModalPacksList} from "../modal/BasicModal";
import {
  RequestCreateNewCardT,
  useCreateNewCardMutation
} from "../../../features/packs-cards/cards/cardsApi";

type AddCardType = {
  packId: string;
};

export const AddNewCard: React.FC<AddCardType> = ({packId, ...props}) => {
  const [addCardModalOpen, setAddCardModalOpen] = useState(false);
  const [addNewCard, {isLoading}] = useCreateNewCardMutation();

  const addNewCardHandler = async (data: RequestCreateNewCardT) => {
    await addNewCard({
      cardsPack_id: packId,
      question: data.question,
      answer: data.answer
    });
    setAddCardModalOpen(false);
  };

  const toggleModalAddCard = () => {
    setAddCardModalOpen(!addCardModalOpen);
  };

  return (
    <>
      <BasicModalPacksList
        title={"Add new card"}
        open={addCardModalOpen}
        closeModal={toggleModalAddCard}
      >
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
        variant={"contained"}
      >
        Add new card
      </Button>
    </>
  );
};
