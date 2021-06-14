import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AddUser } from "./features/AddUser";
import { EditUser } from "./features/EditUser";
import {Signin} from "./features/Signin";
import {SignUp} from "./features/SignUp";
import { UserList } from "./features/UserList";
import {NotFound} from "./features/NotFound";
import { Header } from "./features/Header"; 

export default function App() {

  
  return (
    <BrowserRouter>
      <div>

        <Header/>

        <Switch>
          <Route exact path="/add-user">
            <AddUser />
          </Route>
          <Route exact path='/edit-user/:id'>
            <EditUser />
          </Route>
          <Route exact path="/home">
            <UserList />
          </Route>
          <Route exact path="/">
            <Signin  />
          </Route>
          <Route exact path="/SignUp"  >
            <SignUp  />
          </Route>
          <Route path ='*' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
