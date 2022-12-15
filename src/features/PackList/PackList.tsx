import React from 'react';
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import Box from '@mui/material/Box'
// import { NumberOfCards } from './NumberOfCards'
// import { TablePacks } from './TablePacks'
// import { PaginationPacksList } from './PaginationPacksList'
import {AddNewPack} from "./AddNewPac";
import {InputSearchPacksCard} from "./InputSearchPackCards";
import {ShowPacksCards} from "./ShowPacksCards";

export const PackList = () => {
    // const sort = useAppSelector((state) => state.packsCard.sortPacks)
    // const page = useAppSelector((state) => state.packsCard.page)
    // const pageCount = useAppSelector((state) => state.packsCard.pageCount)
    // const whosePackCard = useAppSelector((state) => state.packsCard.whosePackCard)
    // const packName = useAppSelector((state) => state.packsCard.packName)

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
                    <AddNewPack />
                    <Box
                        sx={{
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <InputSearchPacksCard />
                        <ShowPacksCards />
                        {/*<NumberOfCards />*/}
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
                                {/*<FilterAltOffOutlinedIcon*/}
                                {/*    sx={*/}
                                {/*        !(requestStatus === RequestStatus.loading)*/}
                                {/*            ? {*/}
                                {/*                transition: '0.5s',*/}
                                {/*                cursor: 'pointer',*/}
                                {/*                '&:hover': {*/}
                                {/*                    color: '#1976d2',*/}
                                {/*                    transition: '0.5s',*/}
                                {/*                },*/}
                                {/*            }*/}
                                {/*            : {}*/}
                                {/*    }*/}
                                {/*    onClick={*/}
                                {/*        requestStatus === RequestStatus.loading*/}
                                {/*            ? () => {}*/}
                                {/*            : onClickFilterDefaultHandler*/}
                                {/*    }*/}
                                {/*/>*/}
                            </Box>
                        </Box>
                    </Box>
                    {/*<TablePacks />*/}
                    {/*<PaginationPacksList />*/}
                </Box>
            </Box>
        </>
    );
};

