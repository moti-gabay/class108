import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography"
import { Button } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import {useContext} from "react"
import { LinkContext } from '../contexts/LinkContext';
import { CategoryContext } from '../contexts/CategoryContext';
import { Box } from '@mui/joy';
import {  useNavigate } from 'react-router-dom';

const AddLink: React.FC = () => {
  const {  reset, formState: { errors }, } = useForm();

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
    name: '',
    url: '',
    category: '',
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

  // const { AddLinkReq,link } = useContext(LinkContext);
// const {category } = useContext(CategoryContext)
const nav = useNavigate()

const getCategoryReq = async () => {
  const { data } = await axios.get(
    "http://localhost:3003/category/categoryList"
  );
  console.log(data);
  setCategory(data)
};

useEffect(() => {
getCategoryReq()
},[])

const AddLinkReq = async() => {
  try {
    const {data} = await axios.post("http://localhost:3003/links/addLink",formData)
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <FormControl sx={{ m: 1, width: 300, marginX:40 }} >
     <Typography variant='h4' sx={{marginX:4}}>Add Link Form </Typography>
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
{categories?.map((cate)=> {
  return (
    <MenuItem value={cate.name}>{cate.name}</MenuItem>
  )
})}
          {/* <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem> */}
        </Select>
      </FormControl>
      <Box display={"flex" } justifyContent={"space-evenly"}>
      <Button onClick={AddLinkReq} variant='contained' color='success'>הוסף</Button>
      <Button onClick={() => nav(-1)}  variant='contained' color='primary'>חזור</Button>
   
      </Box>
      </FormControl>
  );
};

export default AddLink;