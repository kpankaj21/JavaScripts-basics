import { parseWithOptions } from 'date-fns/fp'
import React from 'react'

const Car = (props) => {
  return (
    <div><h2>i am {props.brand.model}</h2></div>
  )
}

export default Car