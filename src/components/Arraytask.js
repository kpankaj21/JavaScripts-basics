import React from 'react'

const Arraytask = () => {
    
    // var arr23= [1,22,3,,,10,34,9,6,,5,,,]
    // let datax = arr23.filter(() => true)
    // console.log("datax",datax);

    var arrr = [NaN,0,15,false,-22,undefined,47,null,""]
    //  let newData = arrr.filter(Boolean)
    // console.log("newData",newData);

    // let newData2 =arrr.filter(x => x)
    // console.log("newData2",newData2);

    let filtred =arrr.filter(item => (item !== undefined && !Number.isNaN(item) && item !== false && item !== null && item !== ""))
    console.log("filtred",filtred);

    // console.log(typeof(NaN));

    // let empty =[]
    // arrr.forEach((item)=>{
    //     console.log("item",item);
    //     if(item){
    //         empty.push(item)
    //     }
    // })
    // console.log("emptyyy",empty);
        
        
        
        return (
    <div>Arraytask</div>
  )
}

export default Arraytask