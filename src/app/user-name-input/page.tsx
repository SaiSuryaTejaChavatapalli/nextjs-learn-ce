"use client";

import { useState } from "react";

const UserNameInput = () => {
  console.log("Client component");
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="username">Name</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello, ${name}</h1>
    </div>
  );
};

export default UserNameInput;
