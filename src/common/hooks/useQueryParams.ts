import {useSearchParams} from "react-router-dom";
import {useDebouncedCallback} from "use-debounce";

type ReturnType = [
  searchParams: URLSearchParams,
  setParam: (key: string, value: string) => void,
  deleteParam: (key: string) => void
];

export const useQueryParams = (): ReturnType => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  const deleteParam = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const debouncedSetParam = useDebouncedCallback(setParam, 500);

  return [searchParams, debouncedSetParam, deleteParam];
};
