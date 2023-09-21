import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContext } from "../contexts/LinkContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LINK_INFO_ROUTE } from "../constants/url";

const LinkInfo = () => {
  interface LinksPro {
    category: string;
    name: string;
    url: string;
    id: string;
  }

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
    <Typography sx={{}}>
      <Typography
        sx={{ fontSize: 20, display: "flex", justifyContent: "center" }}
      >
      {link.name}

      </Typography>
      <Typography
        sx={{ fontSize: 20, display: "flex", justifyContent: "center" }}
      >
         {link.category}

      </Typography>

      <Button
        variant="contained"
        sx={{ marginRight: 50 }}
        onClick={() => nav(-1)}
      >
        חזרה
      </Button>
    </Typography>
  );
};

export default LinkInfo;
