export const sortToggle = (sortBy: any, sortParam: any, setParam: any, paramKey: string) => {
    if (sortBy === `0${sortParam}`) {
        sortBy = `1${sortParam}`;
    } else {
        sortBy = `0${sortParam}`;
    }
    setParam(paramKey, sortBy);
}