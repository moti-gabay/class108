import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import { Box, Card } from "@mui/joy";
import { useNavigate, useParams } from "react-router-dom";
import {
  CATEGORY_LIST_ROUTE,
  EDIT_LINK_ROUTE,
  LINK_INFO_ROUTE,
} from "../constants/url";
import { Category, Link } from "../types/types";
import { green,blue } from '@mui/material/colors';

const EditLink: React.FC = () => {
  const { id } = useParams(); 

  const [formData, setFormData] = useState<Link>({
    name: "",
    url: "",
    category: "",
    _id: "",
  });
  const [categories, setCategory] = useState<Category[]>([
    {
      _id: "",
      name: "",
    },
  ]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const nav = useNavigate();

  const getCategoryReq = async () => {
    const { data } = await axios.get(CATEGORY_LIST_ROUTE);
    setCategory(data);
  };

  useEffect(() => {
    getCategoryReq();
  }, []);

  const getLinkInfo = async () => {
    try {
      const { data } = await axios.get(LINK_INFO_ROUTE + id);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const EditLinkReq = async () => {
delete formData._id;
    try {
      const { data } = await axios.put(
        EDIT_LINK_ROUTE + id,
        formData
      );
      console.log(data);
      nav(-1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLinkInfo();
  }, []);

  return (
    <FormControl sx={{ m: 1, width: 300, marginX:"35%",height:"700px",padding:"60px" }} >
           <Card sx={{background:blue[200]}}>
           <Typography variant="h4" sx={{ textAlign:"center",padding:2 }}>
        Edit Link Form{" "}
      </Typography>
      <TextField
        name="name"
        label="name"
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        name="url"
        label="url"
        variant="outlined"
        fullWidth
        value={formData.url}
        onChange={handleChange}
        margin="normal"
      />
      <FormControl  fullWidth variant="outlined" margin="normal">
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
          label="category"
        >
          {categories?.map((cate) => {
            return <MenuItem value={cate.name}>{cate.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <Button onClick={EditLinkReq} variant="contained" color="success">
          ערוך
        </Button>
        <Button onClick={() => nav(-1)} variant="contained" color="primary">
          חזור
        </Button>
      </Box>
</Card>
   
    </FormControl>
  );
};

export default EditLink;
