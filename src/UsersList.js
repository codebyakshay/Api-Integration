import React from "react";

const UsersList = ({ users, handleIsEditing, handleDeleteUser, setUsers }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDeleteUser(user.id, setUsers)}>
            Delete User
          </button>
          <button onClick={() => handleIsEditing(user)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
