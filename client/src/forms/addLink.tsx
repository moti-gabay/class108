import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography"
import { Button } from '@mui/material';
import axios from 'axios';
import { Box, Card } from '@mui/joy';
import {  useNavigate } from 'react-router-dom';
import { Category, Link } from '../types/types';
import { blue } from '@mui/material/colors';

const AddLink: React.FC = () => {

  const [formData, setFormData] = useState<Link>({
    name: '',
    url: '',
    category: '',
    _id:""
  });
  const [categories, setCategory] = useState<Category[]>([
    {
      _id: "",
      name: "",
    },
  ]);
  const handleChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };
  const handleChangeSelect = (event: React.SelectChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  // const { AddLinkReq,link } = useContext(LinkContext);
// const {category } = useContext(CategoryContext)

const getCategoryReq = async () => {
  const { data } = await axios.get(
    "http://localhost:3003/category/categoryList"
  );
  setCategory(data)
};

useEffect(() => {
getCategoryReq()
},[])
const nav = useNavigate()

const AddLinkReq = async() => {
  delete formData._id;
  try {
    const {data} = await axios.post("http://localhost:3003/links/addLink",formData)
    console.log(data);
    nav(-1)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <FormControl sx={{ m: 1, width:"30%",text:"white",height:"auto" }} >
     <Card sx={{background:blue[200]}}>
     <Typography variant='h4' sx={{ textAlign:"center"}}>Add Link Form </Typography>
      <TextField
        name="name"
        label="name"
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={handleChangeInputs}
        margin="normal"
      />
      <TextField
        name="url"
        label="url"
        variant="outlined"
        fullWidth
        value={formData.url}
        onChange={handleChangeInputs}
        margin="normal"
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <Select
          name="category"
          value={formData.category}
          onChange={handleChangeSelect}
          label="category"
        >
{categories?.map((cate)=> {
  return (
    <MenuItem value={cate.name}>{cate.name}</MenuItem>
  )
})}
         </Select>
      </FormControl>
      <Box display={"flex" } justifyContent={"space-evenly"}>
      <Button onClick={AddLinkReq}  variant='contained' color='success'>Add</Button>
      <Button onClick={() => nav(-1)}  variant='contained' color='primary'>Back</Button>
   
      </Box>
     </Card>
 
      </FormControl>
  );
};

export default AddLink;
