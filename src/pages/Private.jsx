import React from "react";
import { useUser } from "../Context/Usercontext";
import Home from "./home";
import Login from "./login";
import Recipes from "./recipes";

const Private = () => {
  const { email } = useUser();
  return email ? <Recipes /> : <Login />;
};

export default Private;
