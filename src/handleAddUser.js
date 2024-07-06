const handleAddUser = async (
  e,
  name,
  password,
  setUsers,
  users,
  setName,
  setPassword
) => {
  e.preventDefault();
  const newUser = { name, password };

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const addedUser = await response.json();
    setUsers([
      ...users,
      {
        id: addedUser.id,
        name: addedUser.name,
        password: addedUser.password,
      },
    ]);

    // Reset form fields
    setName("");
    setPassword("");
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export default handleAddUser;
