import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "../../types/types";
import {  DELETE_LINK_ROUTE, TOKEN_KEY } from "../../constants/url";
import { blue } from "@mui/material/colors";
import AuthAdmin from "../../auth/AuthAdmin";

export default function CardLink(props: Link) {
  const [admin, setAdmin] = useState(false);
  const deleteLink = async () => {
    try {
      if (window.confirm("do you want to delete this link ?")) {
        const { data } = await axios.delete(DELETE_LINK_ROUTE + props._id);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const authReq = async () => {
    setAdmin(Boolean(localStorage.getItem(TOKEN_KEY)))
  };
  const nav = useNavigate();

  useEffect(() => {
    authReq();
  }, [admin,localStorage.getItem(TOKEN_KEY)]);
  return (
    <Button>
      <Card sx={{ width: 250, margin: 1, background: blue[200] }}>
        <CardContent>
          <Typography sx={{ fontSize: 24, textAlign: "center" }} gutterBottom>
            name :<span>{props.name}</span>
          </Typography>
          <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
            url : {props.url.substring(0, 10)}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {admin && <AuthAdmin/> && (
            <div>
              <Button
                size="small"
                sx={{ margin: 1 }}
                onClick={deleteLink}
                variant="contained"
                color="error"
                endIcon={<DeleteIcon style={{ paddingRight: 10 }} />}
              ></Button>
              <Button
                size="small"
                sx={{ margin: 1 }}
                variant="contained"
                onClick={() => nav(`/editLink/${props._id}`)}
                endIcon={<EditIcon style={{ paddingRight: 10 }} />}
              ></Button>
            </div>
          )}
        </CardActions>
      </Card>
    </Button>
  );
}
