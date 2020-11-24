import React from 'react';
import './App.css';
import Login from './components/Login';
import Story from './components/Story';
import StoryForm from './components/StoryForm';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/Profile';
import history from './history'

function App() {

  return (
    <div className="App">
      <Router history={history}>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home" component={()=><Home/>}/>
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
          <Route exact path="/new-story">
            <StoryForm />
          </Route>
      </Router>
    </div>
  );
}

export default App;
