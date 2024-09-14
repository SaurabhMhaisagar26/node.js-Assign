import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { Edit, Delete, CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const TaskItem = ({ task, editTask, deleteTask, completeTask }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        sx={{
          mb: 2,
          backgroundColor: task.is_completed ? "#e0ffe0" : "#fff",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: task.is_completed ? "line-through" : "none",
                  fontWeight: "bold",
                }}
              >
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            </Box>
            <Box>
              {!task.is_completed && (
                <IconButton
                  color="success"
                  onClick={() => completeTask(task._id)}
                >
                  <CheckCircle />
                </IconButton>
              )}
              <IconButton color="primary" onClick={() => editTask(task)}>
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => deleteTask(task._id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskItem;
