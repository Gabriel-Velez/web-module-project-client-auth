import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-bottom: black 3px solid;
  div {
    flex-grow: 2;
    display: flex;
    align-items: left;
    flex-direction: row-reverse;
    align-items: center;
    a {
      margin: 0 1em;
      font-weight: bold;
      font-family: Lato;
      text-transform: uppercase;
      background-color: black;
      color: white;
      padding: 1.5em 1em;
      border: none;
      transition: background-color 0.25s;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.75);
      }
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <h3>Friends DataBase</h3>
      <div>
        <Link to='/friends'>Friends-List</Link>
        <Link to='/friends/add'>Add-Friend</Link>
        <Link to='/logout'>Log-Out</Link>
        <Link to='/'>Log-In</Link>
      </div>
    </StyledNav>
  );
};

export default Nav;
