import React, {FC,} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {validationSchemaForCreateCardModal} from "../../form/yupValidation";
import {RequestCreateNewCardT} from "../../../../features/packs-cards/cards/cardsApi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {CardType} from "../../../../features/packs-cards/cards/cardsSlice";

type ChildEditPack = {
    closeModal: () => void
    packId?: string
    disabled: boolean
    cb: (data: RequestCreateNewCardT) => void
    cardData?: CardType
}

export const CreateNewCardModal: FC<ChildEditPack> = ({
                                                          closeModal,
                                                          packId = "",
                                                          disabled,
                                                          cb,
                                                          cardData = {
                                                              question: "",
                                                              answer: "",
                                                          }
                                                      }) => {

    const formik = useFormik({
        initialValues: {
            question: cardData.question,
            answer: cardData.answer,
        },
        validationSchema: validationSchemaForCreateCardModal,
        onSubmit: (data) => cb({
            cardsPack_id: packId,
            question: data.question,
            answer: data.answer
        })
    });

    const [select, setSelect] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
                sx={mainContainerStyle}
            >
                <Box sx={{minWidth: 100}}>
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Text</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="select"
                            value={select}
                            label="Text"
                            onChange={handleChange}
                        >
                            <MenuItem value={'text'}>Text</MenuItem>
                            <MenuItem value={'image'}>image</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField
                    autoFocus
                    required
                    label="question"
                    id="question"
                    variant="standard"
                    error={formik.touched.question && Boolean(formik.errors.question)}
                    helperText={formik.touched.question && formik.errors.question}
                    {...formik.getFieldProps("question")}
                />
                <TextField
                    required
                    label="answer"
                    id="answer"
                    variant="standard"
                    error={formik.touched.answer && Boolean(formik.errors.answer)}
                    helperText={formik.touched.answer && formik.errors.answer}
                    {...formik.getFieldProps("answer")}
                />
            </Box>
            <Box sx={styleBtnContainer}>
                <Button
                    sx={styleLeftBtn}
                    variant="contained"
                    onClick={() => closeModal()}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    sx={styleRightBtn}
                    variant="contained"
                    disabled={disabled}
                >
                    Create
                </Button>
            </Box>
        </form>
    );
};

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
}

const styleBtnContainer = {display: 'flex', gap: '40px', marginTop: '20px'}

const styleLeftBtn = {
    borderRadius: '30px',
    color: 'black',
    background: 'white',
    width: '127px',
}

const styleRightBtn = {
    borderRadius: '30px',
    width: '127px',
}