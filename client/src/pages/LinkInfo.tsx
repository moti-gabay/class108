import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import { LINK_INFO_ROUTE } from "../constants/url";
import { Link } from "../types/types";

const LinkInfo = () => {
 

  const [link, setLink] = useState<Link>(
    {
      category: "",
      name: "",
      url: "",
      id: "",
    },
  );
  const { id } = useParams();
  const nav = useNavigate();

  const getLinkInfoReq = async () => {
    try {
      const { data } = await axios.get(LINK_INFO_ROUTE + id);
      console.log(data);
      setLink(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLinkInfoReq();
    console.log(LINK_INFO_ROUTE + id);
  }, []);

  return (
    <Typography  sx={{padding:20}}>
      <Typography
        sx={{ fontSize: 20, display: "flex", justifyContent: "center" }}
      >
    שם :   {link.name}

      </Typography>
      <Typography
        sx={{ fontSize: 20, display: "flex", justifyContent: "center" }}
      >
        קטגוריה :  {link.category}

      </Typography>

      <Button
        variant="contained"
        sx={{ marginX:"50%", marginY:3 }}
        onClick={() => nav(-1)}
      >
        חזרה
      </Button>
    </Typography>
  );
};

export default LinkInfo;
