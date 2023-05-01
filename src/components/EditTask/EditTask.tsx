import { useParams } from "react-router-dom";
import { Task } from "../../domain/Task";
import type { Status } from "../../domain/Task";
import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import { useTaskContext } from "../../providers/useTaskContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface EditTaskProps {
  tasks: Task[];
  updateTask: (updatedTask: Task) => void;
}

export const EditTaskRoute = () => {
  const { tasks, updateTask } = useTaskContext();

  return <EditTask tasks={tasks} updateTask={updateTask} />;
};

const EditTask: React.FC<EditTaskProps> = ({ tasks, updateTask }) => {
  const { id } = useParams<string>();
  const [task, setTask] = useState<Task | null>(null);
  const [draftTitle, setDraftTitle] = useState<string>("");
  const [draftDescription, setDraftDescription] = useState<string>("");
  const [draftStatus, setDraftStatus] = useState<Status>("ToDo");

  let navigate = useNavigate();

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === id);
    setTask(foundTask || null);
  }, [id, tasks]);

  useEffect(() => {
    if (!task) {
      return;
    }

    setDraftTitle(task.title);
    setDraftDescription(task.description);
    setDraftStatus(task.status);
  }, [task]);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleUpdate = () => {
    try {
      task.update(draftTitle, draftDescription, draftStatus);
      updateTask(task);
      navigate("/");
    } catch (e) {
      alert("Invalid task!");
    }
  };

  return (
    <>
      <TextField
        label="Title"
        value={draftTitle}
        onChange={(event) => setDraftTitle(event.target.value)}
        required
        fullWidth
        margin="normal"
        variant="filled"
      />
      <TextField
        label="Description"
        value={draftDescription}
        onChange={(event) => setDraftDescription(event.target.value)}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
        variant="filled"
      />
      <FormControl fullWidth margin="normal" variant="filled">
        <InputLabel>Status</InputLabel>
        <Select
          value={draftStatus}
          onChange={(event) => setDraftStatus(event.target.value as Status)}
        >
          {task.getTransitions().map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submit"
        sx={{ width: "50%" }}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleUpdate}
      >
        Edit
      </Button>
      <Link to="/">
        <Button
          type="submit"
          sx={{ width: "50%" }}
          variant="contained"
          color="primary"
          size="large"
        >
          Cancel
        </Button>
      </Link>
    </>
  );
};

export default EditTask;
