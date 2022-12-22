
export const sortToggle = (sortBy:any, setParams:(params:any)=>void, params:any  ) => {
    if (sortBy === '0updated') {
        sortBy = '1updated';
    } else {
        sortBy = '0updated';
    }
    params.set('sortCards', sortBy);
    setParams(params);
}