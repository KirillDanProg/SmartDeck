import React from 'react';
import {AddNewPack} from '../../common/components/mainContent/AddNewPack';
import {SearchPacksCard} from '../../common/components/mainContent/SearchPackCards';
import {ShowPacksCards} from '../PackList/ShowPacksCards';
import {NumberOfCards} from '../PackList/NumberOfCards';
import {PaginationPacksList} from '../../common/components/mainContent/PaginationOfPackList';
import {FiltersReset} from '../../common/components/mainContent/filter-controlers/FiltersReset';
import {PacksPageContainer} from '../../common/components/mainContent/table/PacksPageContainer';
import {TableFiltersContainer} from '../../common/components/mainContent/filter-controlers/TableFiltersContainer';
import {Outlet, useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {TableCards} from '../../common/components/mainContent/pack-cards/CardsPack';
import {TablePacks} from '../../common/components/mainContent/table/TablePacks';
import {AddNewCard} from '../../common/components/mainContent/pack-cards/AddNewCard';

const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const CardsPage = () => {

    const {id} = useParams();

    const hideTableFilters = !id

    return (
        <PacksPageContainer>

            <Box sx={style}>
                <Typography variant="h5"
                            sx={{fontWeight: 'bold'}}>
                    Packs list
                </Typography>

                { hideTableFilters ? <AddNewPack/> : <AddNewCard cardsPack_id= {id}/>}
            </Box>

            <TableFiltersContainer>
                <SearchPacksCard/>

                {
                    hideTableFilters && <>
                        <ShowPacksCards/>
                        <NumberOfCards/>
                        <FiltersReset/>
                    </>
                }

            </TableFiltersContainer>
            {
                hideTableFilters
                    ? <TablePacks/>
                    : <Outlet/>
            }

            <PaginationPacksList/>

        </PacksPageContainer>
    );
};

