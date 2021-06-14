import {useState} from 'react'
import {userDeleted,modalOpen} from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ViewUser } from "./ViewUser";
//import {UserModal} from "./modal"

export function UserList() {

  //const [modalOpen,setModalOpen] = useState(false)
  const[Uid, setId]= useState(0)
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const modal = useSelector((state)=> state.users.modal)
  const loading = useSelector((state) => state.loading);

  //const state = store.getState()

  const handleDelete = (id) => {

    const confirmBox = window.confirm("Are you sure you want to delete this item?")

    if(confirmBox === true){
    dispatch(userDeleted({ id }));
    }
  };

  const handleView =(id)=>{
    dispatch(modalOpen())
    setId(id)
   console.log(modal)
    //return <ViewUser id ={Uid} boo={modalOpen}/>
  }
  console.log(modal)
  return (
    <div className="container">
      <div className="row">
        <h1>User List</h1>
      </div>
      <div className="row">
        <div className="two columns">
          {/*<button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
          >
            Load users
          </button>*/}
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button onClick={()=> handleView(id)}>View</button>
                      { Uid && modal ? <ViewUser id={Uid} /> : null}
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
