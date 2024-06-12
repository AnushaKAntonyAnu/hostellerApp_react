import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const[data,changeData]=useState([
        {
            "name":"Anna",
            "dob":"22-12-2001",
            "course":"MCA",
            "cyear":2023,
            "address":"fasfvasV",
            "place":"dsfD",
            "district":"jhjhkjhk",
            "email":"fuhgkrg",
            "gurdain":"gjghbjhh",
            "gmobileno":"jgjhj",
            "username":"fhgjh",
            "password":"gyugu"
    
        }
    ])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
    
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            {/* <NavBar/> */}
            <br></br><h3><u><center>ViewAll Hosteller</center></u></h3><br></br>
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-dark table-striped-columns">
                           
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
                                   {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{value.name}</td>
                                        <td>{value.course}</td>
                                        <td>{value.cyear}</td>
                                        <td>{value.gmobileno}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                   
                                    }
                                   )}
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll