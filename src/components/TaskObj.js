import React from 'react'

const TaskObj = () => {
//     var target ={a:1,b:2}
//     var source = {b:3,c:4}
//     var target2 ={c:5,d:6}
//     console.log("target",target);
//     console.log("source",source);
//    let finalTarget = Object.assign(target,source,target2)
//    console.log("after target",target);

//    console.log("finalTarget",finalTarget);

  let obj = Object.create({})
   obj.name = "pankaj"
   obj.age = 21
   obj.salary = 10000
   console.log("creating obj",obj);

   let objKeys = Object.keys(obj)
       console.log("objest's keys",objKeys);

   let objValue = Object.values(obj)
        console.log("Object's value",objValue); 
    

   let objToArray = Object.entries(obj)
        console.log("objToArray",objToArray);

 let arrayToObj= Object.fromEntries(objToArray)
 console.log("arrayToObj",arrayToObj);

//    for(const [key, value] of Object.entries(obj)){
//        console.log(`${key} : ${value}`);
//    }

console.log(Object.is("kp","kp")); //true
console.log(Object.is("kp","kpk")); //false
console.log(Object.is([],[])); //false
  return (
    <div>TaskObj</div>
  )
}

export default TaskObj