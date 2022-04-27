import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const StyledLogin = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: 500px;
  }
  .submit {
    width: 100%;
  }
`;

const LogIn = () => {
  const { push } = useHistory();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handelChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <StyledLogin onSubmit={handelSubmit}>
      <div className='wrapper'>
        <h1>Login</h1>
        <div>
          <label htmlFor='Username'>Username</label>
          <input name='username' onChange={handelChange} type='text' />
        </div>
        <div>
          <label htmlFor='Password'>Password</label>
          <input name='password' onChange={handelChange} type='password' />
        </div>
        <button className='submit'>Submit</button>
      </div>
    </StyledLogin>
  );
};

export default LogIn;
