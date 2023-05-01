import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { Task } from "../../domain/Task";

export const TaskCard = ({
  id = "",
  title = "",
  description = "",
  status = "ToDo",
}: Task) => {
  return (
    <Card key={id} sx={{ width: "80%", bgcolor: "white" }}>
      <CardContent>
        <Typography noWrap variant="h5">
          {title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">{status}</Button>
        <Link to={`/${id}`}>
          <Button>Edit</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
