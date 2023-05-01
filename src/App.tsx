import { AppBar, Box } from "@mui/material";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList/TasksList";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "2",
      }}
    >
      <Navbar />
      <TaskForm />
      <TaskList />
    </Box>
  );
}

export default App;
