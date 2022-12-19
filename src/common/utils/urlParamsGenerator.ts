import {QueryParams} from '../../features/cards/packsApi';

type paramEntryType = string[]

export const urlParamsGenerator = (params: paramEntryType[]): QueryParams | any=> {
  let paramsUrl = ''

  for(let i = 0; i < params.length; i++) {
    let key = params[i][0]
    let value = params[i][1]

    if(key && value) {
      paramsUrl += `${key}=${value}&`
    }
  }
  // return url with removed last char => &
  return paramsUrl.slice(0, -1)
}