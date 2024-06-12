import axios from 'axios'
import React, { useState } from 'react'

const SearchHosteller = () => {
    const [data, setData] = useState(

        {
            "course": ""

        }

    )
    const [result, setResult] = useState([])


    //input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    //search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
          (response)=>{
            setResult(response.data)
          }
        ).catch().finally()
 
    }

    //delete event handling
    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("SuucessFull Deleted")
                } else {
                    alert("Error")
                }

            }
        ).catch().finally()
    }
    return (
        <div>
            {/* <NavBar /> */}
            <br></br><h3><u><center>Search Hostellers</center></u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><button className="btn btn-success" onClick={readValue}>Search</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                        
                            <thead>
                                <tr>
                                <th scope="col">SI.NO</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">CourseYear</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {result.map(
                                (value,index)=>{
                                    return <tr>
                                     <th scope="row">{index+1}</th>
                                        <td>{value.name}</td>
                                        <td>{value.course}</td>
                                        <td>{value.cyear}</td>
                                        <td>{value.gmobileno}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
                                </tr>
                                }
                               )}
                                
                            </tbody>
                        </table>
                   
                </div>
            </div>
        </div>
    )
}

export default SearchHosteller