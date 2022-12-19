import React, { FC } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Box from "@mui/material/Box";


type PropsType = {
  params:  URLSearchParams
  setParams: (value: URLSearchParams) => void
}
export const FiltersReset: FC<PropsType>= ({setParams, params}) => {

  const resetFilters = () => {
    params.forEach((value, key) => {
      console.log(key)
    })
    setParams(params)
  }

    return (
        <Box sx={{alignSelf: 'flex-end', marginBottom: '2px'}}>
            <Box
                sx={{
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '36px',
                    height: '36px',
                    background: '#FFFFFF',
                    border: '1px solid #D9D9D9',
                    borderRadius: '2px',
                }}
            >

                <TuneIcon onClick={resetFilters}/>

            </Box>
        </Box>
    );
};

