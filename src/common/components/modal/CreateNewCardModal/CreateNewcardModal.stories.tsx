import React from "react";
import {CreateNewCardModal} from "./CreateNewcardModal";
import {BasicModalPacksList} from "../BasicModal";
import {action} from "@storybook/addon-actions";

export default {
  title: "Create New Card Modal",
  component: CreateNewCardModal
};

const cardTypeExample = {
  answer: "",
  question: "",
  cardsPack_id: "",
  grade: 4,
  shots: 2,
  user_id: "",
  created: "",
  updated: "",
  _id: ""
};

export const CreateNewCardModalExample = () => (
  <BasicModalPacksList
    title={"Modal example"}
    open={true}
    closeModal={action("close modal window")}
  >
    <CreateNewCardModal
      cardData={cardTypeExample}
      closeModal={action("return back and close modal window")}
      cb={action("new card created")}
      packId={"1sdsd"}
      disabled={false}
    />
  </BasicModalPacksList>
);

export const CreateNewCardModalExampleWithDisabled = () => (
  <BasicModalPacksList
    title={"Modal example when 'isLoading' in progress"}
    open={true}
    closeModal={action("close modal window")}
  >
    <CreateNewCardModal
      cardData={cardTypeExample}
      closeModal={action("return back and close modal window")}
      cb={() => {}}
      packId={"1sdsd"}
      disabled={true}
    />
  </BasicModalPacksList>
);
