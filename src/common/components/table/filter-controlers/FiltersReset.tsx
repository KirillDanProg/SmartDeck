import React from 'react';
import TuneIcon from "@mui/icons-material/Tune";
import Box from "@mui/material/Box";

export const FiltersReset = () => {
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

                <TuneIcon/>

            </Box>
        </Box>
    );
};

