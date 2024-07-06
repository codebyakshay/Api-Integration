import React from "react";

const EditUserForm = ({
  handleEditUser,
  tempName,
  setTempName,
  tempPassword,
  setTempPassword,
  handleCloseEditMode,
}) => {
  return (
    <form onSubmit={handleEditUser}>
      <h2>Editing Mode</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={tempPassword}
          onChange={(e) => setTempPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleCloseEditMode}>
        Close
      </button>
    </form>
  );
};

export default EditUserForm;
