import { Box } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList/TasksList";
import { useTaskContext } from "../providers/useTaskContext";
import { Task } from "../domain/Task";
import { TaskListDivider } from "../components/TaskDivider";

export function Home() {
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
      <TaskListDivider text="Tasks" />
      <TaskList tasks={tasks} />
    </Box>
  );
}
