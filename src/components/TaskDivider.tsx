import { Box, Typography } from "@mui/material";

import { blue } from "@mui/material/colors";

export const TaskListDivider = ({ text }: { text: string }) => {
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
        {text}
      </Typography>
    </Box>
  );
};
