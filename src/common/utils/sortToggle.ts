
export const sortToggle = (sortBy:any, sortParam:any, setParams:any, params:any  ) => {
    if (sortBy === `0${sortParam}`) {
        sortBy = `1${sortParam}`;
        return sortBy
    } else {
        sortBy = `0${sortParam}`;
        return sortBy
    }

}