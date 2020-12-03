import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Story from "./components/Story";
import StoryForm from "./components/StoryForm";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import { Router, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./history";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import UserSettings from "./components/UserSettings";
import UserShow from "./components/UserShow";

function App() {
  // let token = localStorage.token;
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.currentUser);

  // function parseJwt(token) {
  //   if (!token) { return; }
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace('-', '+').replace('_', '/');
  //   return JSON.parse(window.atob(base64));
  // }

  // const setTokenState = () => {
  //   dispatch({
  //     type: "SET_CURRENT_USER",
  //     user: parseJwt(token)
  //   })
  // }

  // useEffect(() => {
  //   
  //   if (localStorage.token) {
  //     fetch("http://localhost:3000/profile", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then(async (data) => {
  //         if (data.error) {
  //           console.log("didn't login");
  //           // localStorage.removeItem("token")
  //         } else {
  //           await dispatch({
  //             type: "LOGIN_USER",
  //             user: data,
  //           });
  //           history.push("/home");
  //         }
  //       });
  //   }
  // });

  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/story/:id">
          <Story />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
        <Route exact path="/users/:id">
          <UserShow />
        </Route>
        <Route exact path="/new-story">
          <StoryForm />
        </Route>
        <Route exact path="/profile/:id/settings">
          <UserSettings />
        </Route>
      </Router>
    </div>
  );
}

export default App;
