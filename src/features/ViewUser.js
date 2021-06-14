import React from "react"
import Modal from "react-modal";
import { useDispatch,useSelector } from "react-redux";
import { modalClosed } from "./usersSlice";
//import {userDetails } from "./usersSlice";

export function ViewUser(props){

    //const [modalOpen,setModalOpen] = useState(props.boo)

   const dispatch = useDispatch()
    
    const { entities } = useSelector((state) => state.users);
    const modal = useSelector((state)=> state.users.modal)

   var data = entities.filter((user)=> user.id=== props.id)

   const handleClose = (e)=> {
    e.preventDefault();
    dispatch(modalClosed())
   }

   console.log(data)

    return(
        <div>
            <Modal isOpen={modal} onRequestClose={handleClose} >
            <p>Id: {data[0].id}</p>
            <p>Name:   {data[0].name}</p>
            <p>Website:{data[0].website}</p>
            <button onClick={handleClose}>close</button>
            </Modal>
                
        </div>
    )
    
}