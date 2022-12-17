import React from 'react';
import {AddNewPack} from '../../common/components/mainContent/AddNewPack';
import {SearchPacksCard} from '../../common/components/mainContent/SearchPackCards';
import {ShowPacksCards} from '../PackList/ShowPacksCards';
import {NumberOfCards} from '../PackList/NumberOfCards';
import {TablePacks} from '../../common/components/mainContent/table/TablePacks';
import {PaginationPacksList} from '../../common/components/mainContent/PaginationOfPackList';
import {FiltersReset} from '../../common/components/mainContent/filter-controlers/FiltersReset';
import {PacksPageContainer} from '../../common/components/mainContent/table/PacksPageContainer';
import {TableFiltersContainer} from '../../common/components/mainContent/filter-controlers/TableFiltersContainer';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {TableCards} from '../../common/components/mainContent/pack-cards/CardsPack';

const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const CardsPage = () => {

    const {packId} = useParams()

    const hideTableFilters = !packId

    return (
        <PacksPageContainer>

            <Box sx={style}>
                <Typography variant="h5"
                            sx={{fontWeight: 'bold'}}>
                    Packs list
                </Typography>

                <AddNewPack/>
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

            {/*<TablePacks/>*/}
            <TableCards/>

            <PaginationPacksList/>

        </PacksPageContainer>
    );
};

