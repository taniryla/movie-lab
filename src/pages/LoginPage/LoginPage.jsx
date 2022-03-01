import React, { Fragment, useState } from "react";

export default function LoginPage({ setUser }) {
  const [newUser, setNewUser] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setUser(newUser);
    setNewUser("");
  }

  function handleChange(evt) {
    setNewUser(evt.target.value);
  }

  return (
    <Fragment>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newUser}
          onChange={handleChange}
          placeholder="add username"
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
}
