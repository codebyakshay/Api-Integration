import { useState, useEffect } from "react";

const useFetchUsers = (setUsers) => {
  useEffect(() => {
    // Fetch existing users on component mount
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [setUsers]);
};

export default useFetchUsers;
