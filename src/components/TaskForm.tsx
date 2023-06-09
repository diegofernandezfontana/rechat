import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Task } from "../domain/Task";
import { Typography } from "@mui/material";

const TaskForm = ({ onSubmit }: { onSubmit: (toimplement: any) => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Task.isValid(title, description)) {
      onSubmit({ title, description });
      setTitle("");
      setDescription("");
    } else {
      alert("This is an invalid task");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        margin: "0 auto",
        mb: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ width: "100%", textAlign: "left", mt: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Add a new task
        </Typography>
      </Box>
      <TextField
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
        fullWidth
        margin="normal"
        variant="filled"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
        fullWidth
        multiline
        rows={4}
        variant="filled"
      />
      <Button
        type="submit"
        sx={{ width: "100%", m: 1 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
