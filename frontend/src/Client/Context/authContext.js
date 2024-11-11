/*import axios from "axios";*/
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


  const login = () => {
    setCurrentUser({
      id:1,
      name: "John Doe Test",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmGjI1CLMzgjdc1c27yQD7ShDCuqOWRU91w&s"

    });
  };
  /*const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/backend/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };*/

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};