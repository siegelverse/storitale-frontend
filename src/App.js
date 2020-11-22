import React from 'react';
import './App.css';
import Login from './components/Login';
import Story from './components/Story';
import StoryForm from './components/StoryForm';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/story/:id">
            <Story />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/new-story">
            <StoryForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
