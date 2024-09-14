import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { MdAddCircleOutline } from "react-icons/md";

const TaskForm = ({ addTask, isEditing, currentTask, updateTask }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (isEditing && currentTask) {
      setTask({
        title: currentTask.title,
        description: currentTask.description,
      });
    } else {
      setTask({ title: "", description: "" });
    }
  }, [isEditing, currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTask(currentTask._id, task);
    } else {
      addTask(task);
    }
    setTask({ title: "", description: "" });
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 2, marginBottom: 2, backgroundColor: "#f3f3f3" }}
    >
      <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
        {isEditing ? "Edit Task" : "Add New Task"}{" "}
        <MdAddCircleOutline style={{ marginLeft: "10px" }} />
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={task.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {isEditing ? "Update Task" : "Add Task"}
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
