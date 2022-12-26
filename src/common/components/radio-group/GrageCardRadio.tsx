import * as React from "react";
import Radio from "@mui/material/Radio";
import { FormControl, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FC } from "react";

type PropsType = {
    value: string
    setValue: (value: string) => void
}
export const ColorRadioButtons: FC<PropsType> = ({value, setValue}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <FormControl sx={styleRadio}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleChange}
                value={value}
            >
                <FormControlLabel color="error" label="Did not know" value="1" control={<Radio />} />
                <FormControlLabel color="warning" label="Forgot" value="2" control={<Radio />} />
                <FormControlLabel color="default" label="A lot of thought" value="3" control={<Radio />} />
                <FormControlLabel color="info" label="Confused" value="4" control={<Radio />} />
                <FormControlLabel color="success" label="Knew the answer" value="5" control={<Radio />} />
            </RadioGroup>
        </FormControl>
    );
};

const styleRadio = {
    display: "flex",
    flexDirection: "column"
};