import { React, useState } from "react";
import { Input } from "./input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./login.scss";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Input type={"text"} className={"input"} placeholder={"UserName"} />
      <div className="password">
        <Input
          type={showPassword ? "text" : "password"}
          className={"input"}
          placeholder={"Password"}
        />
        <div className="icons" onClick={togglePassword}>
          {showPassword ? (
            <AiOutlineEye size={15} />
          ) : (
            <AiOutlineEyeInvisible size={15} />
          )}
        </div>
      </div>

      <button className="button">Login</button>
    </div>
  );
};
