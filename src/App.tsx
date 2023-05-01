import { Box, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList/TasksList";
import { useTaskContext } from "./providers/useTaskContext";
import { Task } from "./domain/Task";
import { blue } from "@mui/material/colors";

const TaskListDivider = ({}: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        color: "white",
        bgcolor: blue[700],
        minHeight: "50px",
        margin: "1",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Tasks
      </Typography>
    </Box>
  );
};
function App() {
  const { tasks, addTask } = useTaskContext();

  const handleFormSubmit = ({ title, description }: Task) => {
    const task = Task.create(title, description);
    addTask(task);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "2",
      }}
    >
      <TaskForm onSubmit={handleFormSubmit} />
      <TaskListDivider />
      <TaskList tasks={tasks} />
    </Box>
  );
}

export default App;
