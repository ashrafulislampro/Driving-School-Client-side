import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Registration/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Book from "./Pages/Dashboard/Book/Book";
import PrivateRoute from './Pages/Registration/Login/PrivateRoute/PrivateRoute';
import BookList from "./Pages/Dashboard/BookList/BookList";
import Review from "./Pages/Dashboard/Review/Review";
import Order from "./Pages/Admin/Order/Order";
import AddService from "./Pages/Admin/AddService/AddService";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./Pages/Admin/ManageService/ManageService";
import CommonIssue from "./Pages/CommonIssue/CommonIssue";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // const [courseData, setCourseData] = useState({
  //   title: '',
  //   price: ''
   
  // });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/commonIssue">
          <CommonIssue/>
        </Route>
        <PrivateRoute path="/manageService">
          <ManageService/>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService/>
        </PrivateRoute>
        <PrivateRoute path="/order">
          <Order/>
        </PrivateRoute>
        <PrivateRoute path="/bookingList">
          <BookList/>
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book/>
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book/>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review/>
        </PrivateRoute>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
