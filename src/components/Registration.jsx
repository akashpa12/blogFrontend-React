import axios from 'axios'
import React, { useState } from 'react'

const Registration = () => {
    const[data,setData]=useState(
        {
            "name":"",
            "email":"",
            "password":""
        }
    )
    const inputHANDLER=(event)=>{
        setData({...data,[event.target.name]:event.target.value})


    }
    const readValue=()=>{
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                        alert("error")

                    }
                    
                }
        ).catch(
            (error)=>{
                alert("error")
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"name='name' value={data.name} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" value={data.password} onChange={inputHANDLER} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration