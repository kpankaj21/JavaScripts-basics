import React, { useEffect, useState } from 'react'

const Crud = () => {
  const [addData, setAddData] = useState("")
  const [userData, setUserData] = useState([])
  const [isUpdate, setIsUpdate] = useState(true)
  const [isEditItem, setIsEditItem] = useState(null)


  const addClick = (e) => {
    e.preventDefault()
    console.log("add data");

    if(addData && !isUpdate){
      setUserData(
        userData.map((item) => {
          if (item.id ===isEditItem){
            return { ...item,name:addData}
          }
          return item;
        })
      )
      setAddData('')
      setIsUpdate(true)
    }else  if(addData !== "") {
      setUserData([...userData,
      {
        id: Math.random().toString().substr(3, 4),
        name: addData
      }])
      //  const dataSet = JSON.parse(localStorage.getItem("userdata")) || []
      //  userData.push(dataSet)
      //   localStorage.setItem("userdata", JSON.stringify(userData))

      setAddData("")
    } else {
      alert("Please Enter Value")
    }
  }
  console.log("Adddata", addData);

  const editClick = (id) => {
    console.log("edit Id",id);
    const editData=userData.find((item) => item.id === id)
    console.log("editData",editData);
    setAddData(editData.name)
    setIsUpdate(false)
    setIsEditItem(id)
  }

  const deleteClick = (id) => {
    console.log("delete Id",id);
    const deleteData =userData.filter((item)=> item.id !==id)
    console.log("deleteData",deleteData);
    setUserData(deleteData)
  }

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(userData))
  }, [userData])

  return (
    <>
      <div>
        <input type="text" value={addData} onChange={(e) => setAddData(e.target.value)} />
       {isUpdate ? 
       (
         <button onClick={(e) => addClick(e)}>Add</button>) 
       :
       (
         <button  onClick={(e) => addClick(e)}>Update</button>
         )
         }
      </div>
      <div>
        {userData.map((item) => {
          return (
            <div key={item.id}>{item.name}
              <button onClick={(id) =>editClick(item.id)}>Edit</button>
              <button onClick={(id)=>deleteClick(item.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Crud