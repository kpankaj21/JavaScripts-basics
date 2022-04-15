import React from 'react'

const ArrayMethod = () => {

    // const a = ["apple","ball","cat"]
    // for(const [key , value] of a.entries()){
    //     console.log(`${key} : ${value}`);
    // }

    // const arr = [0,2,4,5,6,[12,34,56,[120,340,567]]]
    // console.log(arr.flat(2));
  

//  const favMovies = ['Begin Again', 'Soul', ['Matrix', 'Matix Reloaded',["kp","pankj",["blusoft"]], 'Matrix Revolutions'],['Frozen', 'Frozen 2', ['Tangled', 'Alladin']]]
//  const data22 =favMovies.toString().split(",")
//  console.log("dataaaa222",data22);

//  console.log(Array.from("pankaj"));
//  console.log(Array.from([1,2,4,5], i => i * 2));


  //   let activities = [
  //     ['Work', 9],
  //     ['Eat', 1],
  //     ['Commute', 2],
  //     ['Play Game', 1],
  //     ['Sleep', 7]
  // ];
  // console.table(activities)

  // const arr = [10,20,30,40]
  // console.log(arr.reduce((a, b) => a + b));

  const arr1 = [[0,1],[2,3],[4,5],[6,7]]
  const reduceright=arr1.reduceRight((a,b) =>a.concat(b))
  console.log("reduc eRight",reduceright);


  const month = ["jan","feb","march","april","june"]

  //  month.splice(4,0,"may");
  // console.log("splice",month);

  // month.splice(5,1,"july")
  // console.log("julyyy",month);

  // month.splice(-2,1);
  // console.log(month);

  month.splice(2)
  console.log(month);
 
  return (
    <div>ArrayMethod</div>
  )
}

export default ArrayMethod