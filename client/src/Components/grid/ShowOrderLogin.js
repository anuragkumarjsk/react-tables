import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import './login.css'

function ShowOrderLogin() {
    const [login,setlogin]=useState('')
    const [pass,setpass]=useState('')
    const [loggedin,setloggedin]=useState(false)
    const [registered,setregistered]=useState(false)
    const RegisteredUsers=[]

    useEffect(() => {
        if(login !== '' && pass !== '')
        {
            const payload = {username:login,password:pass}

             axios.post("http://localhost:4000/user/add",payload)
             .then(()=>{
                  console.log('axios to mongodb')
             })
             .catch(()=>{
                  console.log('unable  to send from axios to mongodb')
             })
    
        }//end of if
    }, [registered])

    useEffect(() => {
       if(login !== '' && pass !== '')
       {
        const payload = {username:login,password:pass}

        axios.get("http://localhost:4000/user/registered",payload)
        .then((d)=>{
             console.log('axios to mongodb')
             localStorage.setItem("user_is_logged_in ","true")
        })
        .catch(()=>{
             console.log('unable  to send from axios to mongodb')
        })

       }//if block

    }, [loggedin])

    return (
        <div className="container" >
         
                <div className="box">
                <input type="text" id="login"  name="login" placeholder="login" value={login} onChange={(e)=>{setlogin(e.target.value)}}/>
                </div>
                <div className="box">
                <input type="text" id="password"  name="password" placeholder="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
                <div className="box">   
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setloggedin(true)}}>Login</button>
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setregistered(true)}}>Register</button>
                </div> 
                
       

        </div>
    )
}

export default ShowOrderLogin