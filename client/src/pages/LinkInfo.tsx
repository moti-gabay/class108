import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContext } from "../contexts/LinkContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LINK_INFO_ROUTE } from "../constants/url";
import { LinksPro } from "../types/types";

const LinkInfo = () => {
 

  const [link, setLink] = useState<LinksPro[]>([
    {
      category: "",
      name: "",
      url: "",
      id: "",
    },
  ]);
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
    Name :   {link.name}

      </Typography>
      <Typography
        sx={{ fontSize: 20, display: "flex", justifyContent: "center" }}
      >
        category :  {link.category}

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
