import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cpassword, setCpassword] = useState("");

  const setUser = (email, username) => {
    setEmail(email);
    setUsername(username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("username", username);
  };

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        formFields,
        setFormFields,
        cpassword,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
