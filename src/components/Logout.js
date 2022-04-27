import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    const { push } = useHistory();
    axios
      .post(
        "http://localhost:9000/api/logout",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        localStorage.removeItem("token");
        push("/");
      })
      .catch((err) => console.error(err));
  }, []);
  return <></>;
};

export default Logout;
