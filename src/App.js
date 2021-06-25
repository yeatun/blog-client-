import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Blog from './Components/Home/Blog';
import BlogDetails from './Components/Home/BlogDetails/BlogDetails';
import Login from './Components/Home/Login/Login';
import { createContext, useState } from 'react';
import BlogPost from './Components/Home/BlogPost/BlogPost';

import PrivateRoute from './Components/Home/Login/PrivateRoute';
import AddNewAdmin from './Components/Home/AddNewAdmin/AddNewAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Switch>
         <Route exact path ="/">
         <Blog></Blog>
         </Route>
         <PrivateRoute path="/blogDetails/:_id">
            <BlogDetails></BlogDetails>
           </PrivateRoute>
           <PrivateRoute path="/admin">
            <AddNewAdmin></AddNewAdmin>
           </PrivateRoute>
         
         <PrivateRoute path ="/blogPost">
         <BlogPost></BlogPost>
      </PrivateRoute>
           <Route  path ="/login">
           <Login></Login>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  
  );
}

export default App;
