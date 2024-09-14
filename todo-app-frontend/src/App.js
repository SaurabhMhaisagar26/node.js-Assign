import React from "react";
import TaskList from "./components/TaskList";
import { CssBaseline, Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?nature,water)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <TaskList />
      </Box>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
