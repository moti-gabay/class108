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
import { DELETE_LINK_ROUTE } from "../../constants/url";
import { green } from '@mui/material/colors';


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
      if(window.confirm("do you want to delete this link ?")){
        const { data } = await axios.delete(
          DELETE_LINK_ROUTE+props._id
         );
         console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

  }, []);
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
          
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex", justifyContent:"space-evenly"}}>
        <Button
         size="small"
          sx={{ margin: 1 }}
          onClick={deleteLink}
          variant="contained"
          color="error"
          endIcon={<DeleteIcon style={{ paddingRight: 10 }} />}
        >
         
        </Button>
        <Button
         size="small"
          sx={{ margin: 1 }}
          variant="contained"
          onClick={() => nav(`/editLink/${props._id}`)}
          endIcon={<EditIcon style={{ paddingRight: 10 }} />}
        >
          
        </Button>
      </CardActions>
    </Card>
  );
}
