import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { LinkContext } from "../contexts/LinkContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { Box } from "@mui/joy";
import { useNavigate, useParams } from "react-router-dom";
import { CATEGORY_LIST_ROUTE, EDIT_LINK_ROUTE, LINK_INFO_ROUTE } from "../constants/url";

const EditLink: React.FC = () => {
  const { id } = useParams();
  interface Category {
    _id: string;
    name: string;
  }

  interface Link {
    category: string;
    name: string;
    url: string;
    _id?: string;
  }

  const [formData, setFormData] = useState<Link>({
    name: "",
    url: "",
    category: "",
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
    console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    getCategoryReq();
  }, []);

const getLinkInfo = async() => {
    try {
        const {data} = await axios.get(LINK_INFO_ROUTE+id)
setFormData(data)
    } catch (error) {
        console.log(error);
        
    }
}

  const EditLinkReq = async () => { 
    console.log(EDIT_LINK_ROUTE + formData._id);

    try {
      const { data } = await axios.put(EDIT_LINK_ROUTE + formData._id, formData);      
      console.log(data);
      nav(-1)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
getLinkInfo()
  },[])

  return (
    <FormControl sx={{ m: 1, width: 300, marginX: 40 }}>
      <Typography variant="h4" sx={{ marginX: 4 }}>
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
      <FormControl fullWidth variant="outlined" margin="normal">
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
        <Button onClick={
            EditLinkReq
        } variant="contained" color="success">
        ערוך
        </Button>
        <Button onClick={() => nav(-1)} variant="contained" color="primary">
          חזור
        </Button>
      </Box>
    </FormControl>
  );
};

export default EditLink;