import React, { createContext, useState } from "react";

export const UserProvider = createContext(null);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <UserProvider.Provider value={{ user, login, logout }}>
      {children}
    </UserProvider.Provider>
  );
};

export default UserContext;
