import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams<string>();

  const message = id ? "Edit" : "Home";
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h5">Task manager &gt; {message}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
