import React from 'react';
import {AddNewPack} from "./AddNewPack";
import {SearchPacksCard} from "./SearchPackCards";
import {ShowPacksCards} from "./ShowPacksCards";
import {NumberOfCards} from "./NumberOfCards";
import {TablePacks} from "./TablePacks";
import {PaginationPacksList} from "./PaginationOfPackList";
import {FiltersReset} from "../../common/components/table/filter-controlers/FiltersReset";
import {PacksPageContainer} from "../../common/components/table/PacksPageContainer";
import {TableFiltersContainer} from "../../common/components/table/filter-controlers/TableFiltersContainer";
import {useParams} from "react-router-dom";

export const GeneralPackList = () => {

    const {packId} = useParams()

    const hideTableFilters = !packId

    return (
        <PacksPageContainer>

            <AddNewPack/>

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

            <TablePacks/>

            <PaginationPacksList/>

        </PacksPageContainer>
    );
};

