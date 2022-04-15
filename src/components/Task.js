import React from 'react'

const Task = () => {

    let data = {
        name: "Student",
        student: {
            male: [{
                name: "Manish", personalInfo: {
                    hobby1: {
                        Swimming: [{ location: [{ "Waterpark": "Surat" }, { "Farmhouse": "Ahmedabad" }] }]
                    }, hobby2: {
                        Cricket: [{ Ground: [{ "LalBahadurStadium": "Surat" }, { "ChinnaSwamiStadium": "kolkata" }] }]
                    }
                }
            }],
            female: [{
                name: "Shruti", personalInfo: {
                    hobby1: {
                        Garaba: [{ Type: [{ "dodhiya": "Surat" }, { "2-tali": "Navasari" }] }]
                    }, hobby2: {
                        Reading: [{ books: [{ "name": "Mahabharat" }, { "name": "Geeta" }] }]
                    }
                }
            }],
        }
    }
    console.log(data.student.male);
    let obj = data.student.male
    let obj1 = data.student.female
    console.log("obj", obj);
    let name1 = obj.map(item => item.name)
    let name2 = obj1.map(item => item.name)
    console.log("namee", name1);

    const swimming1 = obj.map(item => {
        return (
            item.personalInfo.hobby1.Swimming.map(item => {
                return (
                    item.location.map(item => `${Object.keys(item)} : ${Object.values(item)} ,`)
                )
            }))
    })

    const cricket = obj.map(item => {
        return (
            item.personalInfo.hobby2.Cricket.map(item => {
                return (
                    item.Ground.map(item => `${Object.keys(item)} : ${Object.values(item)} ,`)
                )
            })
        )
    })

    const garba = obj1.map(item => {
        return (
            item.personalInfo.hobby1.Garaba.map(item => {
                return (
                    item.Type.map(item => `${Object.keys(item)} : ${Object.values(item)} ,`)
                )
            })
        )
    })

    const reading = obj1.map(item => {
        return (
            item.personalInfo.hobby2.Reading.map(item => {
                return (
                    item.books.map(item => `${Object.keys(item)} : ${Object.values(item)} ,`)
                )
            })
        )
    })

    return (
        <>
            <div>
                <h1> {data.name}</h1>
            </div>
            <div>
                <h2>Name:- {name1}
                </h2>
            </div>
           
            <div>
                <h3>Swimming:-<br></br>
                    <h5>{swimming1}</h5>
                </h3>
                <h3>Cricket:-<br></br>
                    <h5>{cricket}</h5>
                </h3>
            </div>
            <hr></hr>
            <div>
                <h2>Name:- {name2}
                </h2>
            </div>
            <div>
                <h3>Garba:- <br></br>
                    <h5>{garba}</h5>
                </h3>
                <h3>Books:- <br></br>
                    <h5>{reading}</h5>
                </h3>
            </div>
        </>
    )
}

export default Task