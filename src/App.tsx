import { AppBar, Box } from "@mui/material";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <TaskForm />
    </>
  );
}

export default App;
