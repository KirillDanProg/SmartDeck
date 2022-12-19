export type ParamsType = {
  [key: string]: string | string[]
}
export const getUrlParams = (searchParams: URLSearchParams) => {

  const params: ParamsType = {};

  for (let [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
};