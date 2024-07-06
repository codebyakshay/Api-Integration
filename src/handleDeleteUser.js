const handleDeleteUser = async (id, setUsers) => {
  try {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Remove the deleted user from the state
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export default handleDeleteUser;
