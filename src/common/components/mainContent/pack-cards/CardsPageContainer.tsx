import React, {FC} from 'react';
import Box from "@mui/material/Box";

type PropsType = {
    children: React.ReactNode
}

export const CardsPageContainer: FC<PropsType> = ({children}) => {
    return (
        <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                width: '100%',
                height: '100vh',
            }}
        >

            <Box sx={{width: '80%', height: '600px'}}>

                {children}

            </Box>

        </Box>
    );
};

