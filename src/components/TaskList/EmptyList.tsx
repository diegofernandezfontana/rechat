import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const EmptyTaskList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "lightblue",
        flexGrow: 1,
        margin: "2",
      }}
    >
      <Typography align="center" variant="h5">
        You have nothing to do
      </Typography>
      <Typography align="center" variant="h5">
        Go get some sleep
      </Typography>
    </Box>
  );
};
