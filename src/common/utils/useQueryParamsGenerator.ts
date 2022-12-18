import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {urlParamsGenerator} from "./urlParamsGenerator";
import {useDebounce} from "./useDebounce";

export type QueryParamsType = {
    packName?: string | undefined
    user_id?: string
    min?: string
    max?: string
    page?: string
    pageCount?: string
}
type ReturnType = [
    url: string,
    state: QueryParamsType,
    setState: (filters: QueryParamsType) => void
]

export const useQueryParamsGenerator = (): ReturnType => {

    const initialState = {}

    const [filters, setFilters] = useState<QueryParamsType>(initialState)

    const debouncedSearch = useDebounce(filters.packName)

    const memoizedMinMax = useMemo(() => {
        return [filters.min, filters.max]
    }, [filters.min, filters.max])

    const debouncedMinMax = useDebounce(memoizedMinMax)

    const [searchParams, setSearchParams] = useSearchParams()

    // params
    const paramsArray = Array.from(searchParams.entries())

    const queryParamsUrl = urlParamsGenerator(paramsArray)

    useEffect(() => {
        // todo: fix filters first render
        const isFiltersEmpty = Object.keys(filters).length > 0

        if (isFiltersEmpty) {
            setSearchParams(filters)
        }

    }, [debouncedSearch, filters.user_id, debouncedMinMax])

    return [queryParamsUrl, filters, setFilters]
}