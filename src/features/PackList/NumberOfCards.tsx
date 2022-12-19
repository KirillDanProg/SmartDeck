import {QueryParamsType} from '../../common/utils/useQueryParamsGenerator';
import {IGetPacksResponse} from '../cards/packsSlice';
import React, {FC} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {Slider} from '@mui/material'

type PropsType = {
    filters: QueryParamsType
    setFilters: (values: QueryParamsType) => void
    data: IGetPacksResponse | undefined
}
export const NumberOfCards: FC<PropsType> = ({filters, setFilters, data}) => {
  //todo: fix slider types and state update

  const maxValueStrict = data?.maxCardsCount

  const min = filters.min || data?.minCardsCount || 0
  const max = filters.max || data?.maxCardsCount || 10

  const handleChange = (event: Event, value: number | number[]) => {
    let newValues = value as number[]
    setFilters({
      ...filters,
      min: `${newValues[0]}`,
      max: `${newValues[1]}`
    })
  }
  return (
    <Box>
      <Typography variant="h6">Number of cards</Typography>
      <Box sx={containerStyle}>
        <Box sx={style}>
          <Typography>{min}</Typography>
        </Box>

        <Slider
          disabled={false}
          sx={{width: '155px',}}
          getAriaLabel={() => 'range'}
          value={[+min, +max]}
          onChange={handleChange}
          valueLabelDisplay="off"
          max={maxValueStrict}
        />
        <Box sx={style}>
          <Typography>{max}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '36px',
  height: '36px',
  background: '#FFFFFF',
  border: '1px solid #D9D9D9',
  borderRadius: '2px',
  margin: '0 15px 0 0',
}
const containerStyle = {
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  alignItems: 'center',
}
