import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import axios from "axios";
import { Link } from "../../types/types";


export default function CardLink(props: Link) {
 
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const deleteLink = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3003/links/${props._id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const { link , setLink } = useContext(LinkContext)
  // const {category } = useContext(CategoryContext)

  useEffect(() => {}, []);
  const nav = useNavigate();
  return (
    <Card sx={{ width: 250, margin: 1, background: "#e0e0e0" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24, textAlign: "center" }} gutterBottom>
          שם : {props.name}
        </Typography>
        <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
          קישור : {props.url.substring(0, 10)}
        </Typography>
        <Typography fontSize={1} component="div">
          <ColorButton
            sx={{ marginRight: 9 }}
            onClick={() => nav(`/LinkInfo/${props._id}`)}
            variant="contained"
          >
            פתיחה
          </ColorButton>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ margin: 1 }}
          onClick={deleteLink}
          variant="contained"
          color="error"
          endIcon={<DeleteIcon style={{ paddingRight: 10 }} />}
        >
          מחיקה
        </Button>
        <Button
          sx={{ margin: 1 }}
          variant="contained"
          onClick={() => nav(`/editLink/${props._id}`)}
          endIcon={<EditIcon style={{ paddingRight: 10 }} />}
        >
          עדכון
        </Button>
      </CardActions>
    </Card>
  );
}
