const handleUpdateUser = async (
  currentUserId,
  tempName,
  tempPassword,
  setUsers
) => {
  try {
    const response = await fetch(`/api/users/${currentUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: tempName, password: tempPassword }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedUser = await response.json();

    // Update the user in the state
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === currentUserId
          ? { ...user, name: updatedUser.name, password: updatedUser.password }
          : user
      )
    );
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default handleUpdateUser;
