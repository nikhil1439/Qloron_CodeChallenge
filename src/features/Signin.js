import React, { useState } from 'react';
import ls from "local-storage";
import { Link, useHistory  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {loggedin} from "./usersSlice";
import "./Signin.css";

export function Signin(props)  {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const isLogin = useSelector((state)=> state.users.isLogin)

    const dispatch = useDispatch()
    let history = useHistory()
   
   const onchange=(e)=>{
       setEmail(e.target.value)
    }
    const onchange1=(e)=>{
      setPassword(e.target.value)
   }

   const handleClick = ()=>{
     let data= JSON.parse(ls.get("userdata"))
     
     for(let i=0;i<data.length;i++)
     {
       if(data[i].email===email){
         if(data[i].password===password){
           alert("signed in Successfully")
           setEmail("")
           setPassword("")
           dispatch(loggedin())
         }
         else{
          alert("incorrect password")
          setEmail("")
          setPassword("") 
         }
       }
     }
   }
       if(isLogin){
            history.push("/home")
        }
        //console.log("State:",email,password,isLogin)
        return (
            <div className= "container">
            <div className="signin-details">
            <form className="form">
            <h2>Login</h2>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Email</p>
            <input type="text" placeholder="Enter email" value={email} name="email" onChange={onchange}></input></div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Password</p>
            <input type="password" name="password" placeholder="Enter password" value={password} onChange={onchange1}></input>
            </div>
            <div className="row">
            <button className="button-primary" type="submit" style={{marginRight:"10px"}} onClick={handleClick}>Sign In!</button>
            <Link to="/Signup"><button  className="button-primary">Create your account!</button></Link>
            </div>
            </form>
            </div>
            </div>
        )
}
export default Signin