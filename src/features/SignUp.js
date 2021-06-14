import React,{useEffect, useState} from "react"
import ls from "local-storage"
import { useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signedup} from "./usersSlice";
import "./SignUp.css"
export function SignUp(){

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    let history = useHistory()
    const dispatch = useDispatch()
    const isSignup = useSelector((state)=>state.users.isSignup)

    useEffect(()=>{
        let fake_data=[{
            email:"nikhil1@gmail.com",
            password:"83893",
            username:"nikhil"
        }]
        let data=ls.get("userdata")
        if(!data){
            ls.set("userdata",JSON.stringify(fake_data))
        }
    },[])

    const onEmail =(e)=>{
        return setEmail(e.target.value)
    }

    const onUsername =(e)=>{
        return setUserName(e.target.value)
    }

    const onPassword =(e)=>{
        return setPassword(e.target.value)
    }

    const onRepassword =(e)=>{
        return setRepassword(e.target.value)
    }


    const onClick=()=>{
    let format=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(format.test(email)){
                if(password.length>=8){
                    if(password===repassword){
                    alert("Signup Sucessfully")
                    let data=ls.get("userdata")
                    data=JSON.parse(data)
                    data.push({"email":email,"password":password,username:username})
                    data=JSON.stringify(data)
                    ls.set("userdata",data)

                    setEmail("")
                    setPassword("")
                    setUserName("")
                    dispatch(signedup())
                    if(isSignup){
                        history.push("/")
                    }
                }else{
                        alert("password mismatch")
                    }
         }else{
                    alert("incorrect password length!!")
                }
        }
        else{
            alert("invalid email!!")
        }
        setEmail("")
        setPassword("")
        setUserName("")
        setRepassword("")
       
    }   
    
        
        
        return(
            <div className="signup-details">
            <form className="form">
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Username</p>
            <input type="text" className="input" value={username} placeholder="enter username" onChange={onUsername}></input></div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Email</p>
            <input type="text" className="input" value={email} placeholder="enter email" onChange={onEmail}></input>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Password</p>
            <input type="password" className="input" value={password} placeholder="enter password" onChange={onPassword}></input>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Re-enter Password</p>
            <input type="password" className="input" value={repassword} placeholder="enter repassword" onChange={onRepassword}></input>
            </div>
            <button className="button-primary" style={{marginRight:"0px"}} onClick={onClick}>Sign UP!</button>
           </form>
           </div>
            
        )
}
export default SignUp;