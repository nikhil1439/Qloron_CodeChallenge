import React from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import {loggedout} from "./usersSlice";
import "./Header.css"

export const Header=()=>{

    const history = useHistory()
    const dispatch = useDispatch()
    const isLogin = useSelector((state)=> state.users.isLogin)

   const handleLogout = ()=>{
       dispatch(loggedout())
    }

    if(!isLogin){
        history.push("/")
    }

    return(
        <div className="header">
            <h2>Code Challenge</h2> 

            {isLogin ? <button onClick={handleLogout} className="button-primary">Logout</button> : null}
        </div>
    )
}