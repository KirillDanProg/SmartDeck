import {urlParamsGenerator} from './urlParamsGenerator';
import {useDebounce} from './useDebounce';
import {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

export type QueryParamsType = {
    packName?: string
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
debugger
  // params
  const paramsArray = Array.from(searchParams.entries())

  const queryParamsUrl = urlParamsGenerator(paramsArray)

  useEffect(() => {
    const isFiltersEmpty = Object.keys(filters).length > 0

    if (isFiltersEmpty) {
      setSearchParams(filters)
    }

  }, [debouncedSearch, filters.user_id, debouncedMinMax])

  return [queryParamsUrl, filters, setFilters]
}