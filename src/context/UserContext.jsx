import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
export const UserContext = createContext();

// Create a provider which will fetch and provide the users
export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);

  const getAllUsers = async () => {
    setUserLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.log("Error: response.data is not an array");
        setUsers([]);
      }
      setUserLoading(false);
    } catch (error) {
      console.log(error);
      setUsers([]);
      setUserLoading(false);
    }
  };

  const createUser = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users",
        user
      );
      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/users/${id}`,
        updatedUser
      );
      setUsers(users.map((user) => (user._id === id ? response.data : user)));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ userLoading, users, createUser, updateUser, deleteUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
