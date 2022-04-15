import React from 'react'

const Array1 = () => {
    const arr = [
        { id: 1, name: "kp", game: "cricket", result: "won" },
        { id: 2, name: "kpk", game: "volleyball", result: "lost" },
        { id: 3, name: "pankaj", game: "football", result: "won" },
        { id: 4, name: "dishant", game: "hocky", result: "won" },
        { id: 5, name: "manish", game: "volleyball", result: "lost" },
        { id: 6, name: "pankaj", game: "tennis", result: "lost" },
        { id: 7, name: "gautam", game: "running", result: "won" },
        { id: 8, name: "kp", game: "cricket", result: "lost" },
    ]
    
let empty = []
   let dupli = arr.filter((item)=>{
        if(empty.find((item2) =>item2.name === item.name))
            return item
            empty.push(item)
    })
    console.log("empty",dupli);

    // let dupli = arr.filter((item) => {
    //     // console.log();
    //     if (arr.find(j => j.name === item.name)) {

    //     }
    //     else{
    //         return item
    //     }
    // })
   // console.log("dupli", dupli);

    // const unique = []
    //  arr.filter((i) => {
    //     if (unique.find((j) => j.name === i.name)) {
    //         return true
    //     }
    //     unique.push(i)
    //     return false
    // })
    // console.log("unique name :", unique);


    // let store =""
    // arr.forEach((item) => {
    //     store += item.game + " "
    // })
    // console.log(store);


    // const empty = []
    // arr.filter((i) => {
    //     if (empty.find((j) => j.game === i.game)) {
    //         return true
    //     }
    //     empty.push(i)
    //     return false

    // })
    // console.log("emptyyyy", empty);

    // console.table(arr)


    // let game = arr.filter((i) => i.game === "volleyball")
    // console.log("gaem", game);

    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     // console.log("beforeee element", element.game);
    //     if (element.game == "volleyball") {
    //         console.log("element00000000", element);
    //     }
    // }

    //   arr.forEach(function myFunction(item){
    //     //    console.log("item",item.game);
    //        if(item.game === "volleyball"){
    //            console.log("volleyball Game : ",item);
    //        }
    //    })

    // let data = arr.filter((item) => item.result === "won")
    // console.log("dataaa", data);
    // let cricGame = data.filter((item) => item.game === "cricket")
    // console.log("cricGame", cricGame);

    // for (let i of cricGame) {
    //     console.log("name of the player who one :", i.name);
    // }

    return (
        <div>Array1</div>
    )
}

export default Array1