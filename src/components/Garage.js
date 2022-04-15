import React from 'react'
import Car from './Car'

const Garage = () => {
    const carInfo = {
        name:"Audi",
        model:"Q3",
        price:80
    }
  return (
    <div> 
    <Car brand ={carInfo}  />
    </div>
  )
}

export default Garage