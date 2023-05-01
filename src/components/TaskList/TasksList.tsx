import Box from "@mui/material/Box";
import type { Task } from "../../domain/Task";
import { TaskCard } from "./TaskCard";
import { EmptyTaskList } from "./EmptyList";
import { red, blue, indigo } from "@mui/material/colors";

const TaskList = ({ tasks = [] }: { tasks: Task[] }) => {
  if (!tasks.length) {
    return <EmptyTaskList />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: blue[700],
        minHeight: "100px",
        flexGrow: 1,
        margin: "2",
      }}
    >
      TASKS
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          bgcolor: "lightblue",
          minHeight: "100%",
          flexGrow: 1,
          margin: "2",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)" },
            gap: 2,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {tasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;
