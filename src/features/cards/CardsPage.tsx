import React from 'react';
import {getUrlParams} from 'common/utils';
import {useQueryParams} from 'common/hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  AddNewCard,
  PacksPageContainer,
  PacksPagination,
  SearchPacksCard,
  TableCards,
  TableFiltersContainer
} from 'common/components';
import {IGetCardsResponse} from './cardsApi/cardsSlice';
import {useGetCardsQuery} from './cardsApi/cardsApi';
import {ReturnComponent} from 'common/components/returnComponent/ReturnComponent';


export const CardsPage = () => {

    const [searchParams] = useQueryParams();
    const paramsObject = getUrlParams(searchParams);

    const {data = {} as IGetCardsResponse} = useGetCardsQuery(paramsObject);

    const packId = searchParams.get('cardsPack_id') || '';

    return (
        <PacksPageContainer>

            <ReturnComponent/>

            <Box sx={style}>

                <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                  {data.packName}
                </Typography>

                <AddNewCard packId={packId}/>

            </Box>

            <TableFiltersContainer>

                <SearchPacksCard/>

            </TableFiltersContainer>

            <TableCards/>

            <PacksPagination data={data}/>

        </PacksPageContainer>
    );
};

const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};