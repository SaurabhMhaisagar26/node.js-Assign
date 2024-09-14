import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { Container, Typography } from "@mui/material";
import { toast } from "react-toastify";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      fetchTasks();
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      setIsEditing(false);
      setCurrentTask(null);
      fetchTasks();
      toast.info("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
      toast.error("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${id}/complete`);
      fetchTasks();
      toast.success("Task marked as completed!");
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ mt: 4, textAlign: "center", color: "#fff" }}
      >
        To-Do List
      </Typography>
      <TaskForm
        addTask={addTask}
        isEditing={isEditing}
        currentTask={currentTask}
        updateTask={updateTask}
      />
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </Container>
  );
};

export default TaskList;
