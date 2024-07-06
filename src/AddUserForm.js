import React from "react";

const AddUserForm = ({
  handleAddUser,
  name,
  setName,
  password,
  setPassword,
  setUsers,
  users,
}) => {
  return (
    <form
      onSubmit={(e) =>
        handleAddUser(e, name, password, setUsers, users, setName, setPassword)
      }
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
