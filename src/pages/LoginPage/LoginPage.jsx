import React, { Fragment, useState } from "react";

const LoginPage = ({ user, setUser }) => {
  const [newUser, setNewUser] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setUser(newUser);
    setNewUser("");
  }

  function handleChange(evt) {
    setUser(evt.target.value);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={handleChange}
          placeholder="add username"
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default LoginPage;
