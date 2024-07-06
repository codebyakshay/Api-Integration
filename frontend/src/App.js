import React, { useState } from "react";
import useFetchUsers from "./fetchUsers";
import handleAddUser from "./handleAddUser";
import AddUserForm from "./AddUserForm";
import handleDeleteUser from "./handleDeleteUser";
import handleUpdateUser from "./handleUpdateUser";
import EditUserForm from "./EditUserForm";
import UsersList from "./UsersList";

const App = () => {
  //  Main State Variables
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // IsEditing VAriable
  const [tempName, setTempName] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);

  // Visibility states
  const [addUserFormVisibility, setAddUserFormVisibility] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Use the custom hook to fetch users
  useFetchUsers(setUsers);

  const handleIsEditing = (user) => {
    setIsEditing(true);
    setTempName(user.name);
    setTempPassword(user.password);
    setCurrentUserId(user.id);
    setAddUserFormVisibility(false); // Hide AddUserForm when editing
  };

  // Handle edit form submission
  const handleEditUser = async (e) => {
    e.preventDefault();
    await handleUpdateUser(currentUserId, tempName, tempPassword, setUsers);

    // Reset editing state
    setIsEditing(false);
    setTempName("");
    setTempPassword("");
    setCurrentUserId(null);
  };

  const enableEditingMode = () => setIsEditing(false);

  return (
    <div className="container">
      <h1>Users List</h1>
      {isEditing ? (
        <EditUserForm
          handleEditUser={handleEditUser}
          tempName={tempName}
          setTempName={setTempName}
          tempPassword={tempPassword}
          setTempPassword={setTempPassword}
          handleCloseEditMode={enableEditingMode}
        />
      ) : (
        <UsersList
          users={users}
          handleIsEditing={handleIsEditing}
          handleDeleteUser={handleDeleteUser}
          setUsers={setUsers}
        />
      )}

      {addUserFormVisibility && (
        <>
          <h2>Add New User</h2>
          <AddUserForm
            handleAddUser={handleAddUser}
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            setUsers={setUsers}
            users={users}
          />
        </>
      )}
    </div>
  );
};

export default App;
