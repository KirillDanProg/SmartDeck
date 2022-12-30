export const sortToggle = (sortBy: string, sortParam: string, setParam: (paramKey:string, sortBy:string)=>void, paramKey: string) => {
    if (sortBy === `0${sortParam}`) {
        sortBy = `1${sortParam}`;
    } else {
        sortBy = `0${sortParam}`;
    }
    setParam(paramKey, sortBy);
}