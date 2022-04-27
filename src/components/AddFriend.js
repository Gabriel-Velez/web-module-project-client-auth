import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledAddFriend = styled.form`
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

const AddFriend = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: token,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <StyledAddFriend onSubmit={handelSubmit}>
      <div className='wrapper'>
        <h1>Add Friend</h1>
        <div>
          <label htmlFor='Name'>Friend Name</label>
          <input onChange={handelChange} name='name' id='name' type='text' />
        </div>
        <div>
          <label htmlFor='Age'>Friend Age</label>
          <input onChange={handelChange} name='age' id='age' type='number' />
        </div>
        <div>
          <label htmlFor='Email'>Friend Email</label>
          <input onChange={handelChange} name='email' id='email' type='email' />
        </div>
        <button className='submit'>Submit</button>
      </div>
    </StyledAddFriend>
  );
};

export default AddFriend;
