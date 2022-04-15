import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Home = () => {
    const data1 =  format(new Date(), "'Today is a' eeee")
    const data2 = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
    const data3 = formatRelative(subDays(new Date(), 3), new Date())

// console.log(data1);
// console.log(data2);
console.log(data3);
    // format(new Date(2014, 1, 11), 'MM/dd/yyyy')

    // const dates = [
    //     new Date(1995, 6, 2),
    //     new Date(1987, 1, 11),
    //     new Date(1989, 6, 10),
    //   ]
    //   dates.sort(compareAsc)
  return (
    <div> 

      </div>
  )
}

export default Home