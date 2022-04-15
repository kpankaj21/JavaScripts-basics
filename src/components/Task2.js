import React from 'react'

const Task2 = () => {
    const arr = [1,23,4,5,75,5,5,1,2,44,52,2,1]
     const data = new Set(arr)
     let x = [...data]  
     let y = x.sort(function(a,b){return a-b})
     console.log(y)
    let data1= y.map((item)=> {
        //  console.log(item)
         let value = arr.filter(item1=>item1 === item)
         console.log("value",value); 
         return {
            [item] : value.length
         }
     })
     console.log("dataq",data1);
   
    // const keys =arr.keys()
    // let store=""
    // let store1=""
    // for(let i of keys){
    //     console.log("i",i);
        // store += i
        // console.log("store",store)
        // for(let j of arr){
        // console.log("j",j);

        //    store1 += j 
        //    console.log("store1",store1);
            // let res=`${Object.keys(store)} : ${Object.values(store1)}`
            // console.log("res",res); 
        // }
    // }
    // console.log("stpre",store);
    // console.log("store11",store1);
    // var arr232= [1,22,3,10,34,9,6,5]
    // const obj12 = Object.fromEntries(arr232)
    // console.log("fromentries obj",obj12);

  return (
    <div>Task2</div>
  )
}

export default Task2