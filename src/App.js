import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Login from "./components/Login";
import Nav from "./components/nav";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

const theme = {};

const StyledApp = styled.div`
  text-transform: uppercase;
  font-family: Lato;
  button {
    font-weight: bold;
    font-family: Lato;
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding: 1.5em 1em;
    border: none;
    transition: background-color 0.25s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
  h1 {
    font-size: 5rem;
  }
  input {
    border: none;
    background-color: black;
    padding: 1.5em 1em;
    color: white;
    width: calc(100% - 2em);
    margin-bottom: 1em;
  }
  label {
    display: block;
    text-align: left;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StyledApp className='App'>
          <Nav></Nav>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Redirect to='/' />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <PrivateRoute exact path='/friends' component={FriendsList}></PrivateRoute>
          <PrivateRoute path='/friends/add'>
            <AddFriend />
          </PrivateRoute>
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
