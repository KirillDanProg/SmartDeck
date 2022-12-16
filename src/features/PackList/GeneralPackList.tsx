import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import Box from '@mui/material/Box'
import {AddNewPack} from "./AddNewPack";
import {SearchPacksCard} from "./SearchPackCards";
import {ShowPacksCards} from "./ShowPacksCards";
import {NumberOfCards} from "./NumberOfCards";
import {TablePacks} from "./TablePacks";
import {PaginationPacksList} from "./PaginationOfPackList";

export const GeneralPackList = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px',
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Box
                    sx={{
                        width: '1000px',
                        height: '600px',
                    }}
                >
                    <AddNewPack/>
                    <Box
                        sx={{
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <SearchPacksCard/>
                        <ShowPacksCards/>
                        <NumberOfCards/>
                        <Box
                            sx={{
                                alignSelf: 'flex-end',
                                marginBottom: '2px',
                            }}
                        >
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
                                <TuneIcon
                                onClick={()=>{alert("Thank you for dinner")}}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <TablePacks/>
                    <PaginationPacksList/>
                </Box>
            </Box>
        </>
    );
};

