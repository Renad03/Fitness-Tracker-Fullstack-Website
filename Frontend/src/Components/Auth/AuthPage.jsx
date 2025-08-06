import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Box } from "@mui/material";

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSwitchMode = (mode) => {
    if (mode === "register") {
      setIsLoginMode(false);
    } else {
      setIsLoginMode(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {isLoginMode ? (
        <Login onSwitchMode={handleSwitchMode} />
      ) : (
        <Register onSwitchMode={handleSwitchMode} />
      )}
    </Box>
  );
};

export default AuthPage;
