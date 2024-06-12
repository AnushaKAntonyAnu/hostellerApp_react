import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const AddHosteller = () => {
    const[data,setData]=useState(
        
        {
            "name":"",
            "dob":"",
            "course":"",
            "cyear":"",
            "address":"",
            "place":"",
            "district":"",
            "email":"",
            "gurdain":"",
            "gmobileno":"",
            "username":"",
            "password":"",
            "confirmpassword":""
    
        }
    
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    if(data.password==data.confirmpassword){
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success add")
            } else {
                alert("error")
            }
        }
    )
}
else{
    alert("check password")
}
}
return (
<div>
    <NavBar/> 
    <br></br><h3><u><center>Hostellers Registration</center></u></h3><br></br>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <select  id="" className="form-control" name='course' value={data.course} onChange={inputHandler}>
                                    <option value="MCA">MCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    
                                </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="from-label">CourseYear Duration</label>
                        <input type="text" className="form-control" name='cyear' value={data.cyear} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                       <textarea  id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Place</label>
                        <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">District</label>
                        <select id="" className="form-control"name='district' value={data.district} onChange={inputHandler}>
                                    <option value="Thrivanthapuram">Thrivanthapuram</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Ernakulam">Ernakulam</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Malapuaram">Malapuaram</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasaragod">Kasaragod</option>
                                </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="from-label">Email</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Gurdain Name</label>
                        <input type="text" className="form-control" name='gurdain' value={data.gurdain} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">MobileNo</label>
                        <input type="text" className="form-control" name='gmobileno' value={data.gmobileno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password"  id="" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><button className="btn btn-success" onClick={readValue}>Submit</button></center>
                        <p>Back to Login<Link to="/">Login</Link></p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default AddHosteller