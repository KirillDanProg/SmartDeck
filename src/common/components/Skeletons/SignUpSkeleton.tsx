import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from "@mui/material/Box";
import {CustomGridContainer} from "../CustomGridContainer";
import {HeaderSkeleton} from "./HeaderSkeleton";

export const SignupSkeleton = () => {
    return (
        <>
            <HeaderSkeleton/>
            <CustomGridContainer>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Skeleton variant={'circular'} sx={{height: '75px', width: '75px'}}/>
                    <Skeleton variant={'rounded'} sx={{marginTop: '20px', height: '40px', width: '150px'}}/>
                    <Skeleton variant={'rectangular'} sx={{marginTop: '20px', height: '50px', width: '400px'}}/>
                    <Skeleton variant={'rectangular'} sx={{marginTop: '20px', height: '50px', width: '400px'}}/>
                    <Skeleton variant={'rectangular'} sx={{marginTop: '20px', height: '50px', width: '400px'}}/>
                    <Skeleton variant={'rounded'} sx={{marginTop: '50px', height: '50px', width: '400px'}}/>
                    <Skeleton variant={'rounded'} sx={{marginTop: '20px', height: '20px', width: '200px'}}/>
                    <Skeleton variant={'rounded'} sx={{marginTop: '20px', height: '40px', width: '150px'}}/>
                </Box>
            </CustomGridContainer>
        </>
    );
};

