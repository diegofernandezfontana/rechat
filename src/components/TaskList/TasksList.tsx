import Box from "@mui/material/Box";
import type { Task } from "../../domain/Task";
import { TaskCard } from "./TaskCard";
import { EmptyTaskList } from "./EmptyList";
import { blue } from "@mui/material/colors";

const TaskList = ({ tasks = [] }: { tasks: Task[] }) => {
  if (!tasks.length) {
    return <EmptyTaskList />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: blue[700],
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          bgcolor: "lightblue",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 2,
            gap: 10,
            bgcolor: "lightblue",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              width: "100%",
              gridGap: 20,
              m: 2,
            }}
          >
            {tasks.map(({ id, description, title, status }) => (
              <TaskCard
                key={id + title}
                status={status}
                id={id}
                title={title}
                description={description}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;
