import React from 'react'

const Array = () => {
    const arr1 = [{ id: 1, name: "P1", value: 20 },
    { id: 2, name: "P12", value: 100 }]
    const arr2 = [{ id: 1, name: "P5", value: 60 },
    { id: 2, name: "P3", value: 30 }]

    //     for (let i = 0; i < arr1.length; i++) {
    //         for(let j =0; j<arr2.length; j++){
    //             if(arr1[i].id == arr2[j].id){
    //               arr1[i].value += arr2[j].value
    //             }
    //         }
    //     }
    //     console.log("arraa",arr1);
    // let store=""
    //     for(let i of arr1){
    //         store +="ID: " + i.id + " " + "Name :" + i.name + " " +"Total: " + i.value + " ,"
    //     }

    const getHandler = () => {
        const data = arr1.map((item) => {
            let value = arr2.filter((item2) => item2.id === item.id)
            console.log("value", value);
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                console.log("element", element)
                item.value += element.value
            }
            return item
        })
        console.log("dataaa", data);
    }
    getHandler()

    return (
        <div>
            {/* {store} */}
        </div>
    )




}

export default Array