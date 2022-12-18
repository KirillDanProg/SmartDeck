import React, {FC, memo} from 'react';
import Box from "@mui/material/Box";

type PropsType = {
    children: React.ReactNode
}
export const TableFiltersContainer: FC<PropsType> = memo(({children}) => {
    return (
        <Box sx={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: "30px"
        }}>
            {children}
        </Box>
    );
})

