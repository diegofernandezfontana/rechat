import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import type { TaskInfo } from "../../domain/Task";
import { EditIcon } from "../../assets/EditIcon";
import { Box } from "@mui/material";

export const TaskCard = ({ id, title, description, status }: TaskInfo) => {
  return (
    <Card sx={{ width: "100%", bgcolor: "white" }} data-testid="TaskCard">
      <CardContent>
        <Typography noWrap variant="h6">
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Button variant="contained">{status}</Button>
          <Link to={`/${id}`}>
            <EditIcon width="32px" height="32px" fill="black" />
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};
