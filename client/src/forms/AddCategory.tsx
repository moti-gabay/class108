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
import { green,blue } from '@mui/material/colors';
import { ADD_CATEGORY_ROUTE } from '../constants/url';

const AddCategory = () => {

  
  const [category, setCategory] = useState({
    name:""
  });
  
const nav = useNavigate()

const AddCategoryReq = async() => {
    let cate = {
        name:category
    }
  try {
    const {data} = await axios.post(ADD_CATEGORY_ROUTE,cate)
    console.log(data);
    nav(-1)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <FormControl sx={{width:"400px",height:"700px",padding:"60px" }} >
     <Card sx={{background:blue[200]}}>
     <Typography variant='h4' sx={{ textAlign:"center"}}>Add Category</Typography>
      <TextField
        name=" name"
        label="category name"
        variant="outlined"
        fullWidth
       
        onChange={(e) => setCategory(e.target.value)}
        margin="normal"
      />
     
      <Box display={"flex" } justifyContent={"space-evenly"}>
      <Button onClick={AddCategoryReq}
        variant='contained' color='success'>Add</Button>
      <Button onClick={() => nav(-1)}  variant='contained' color='primary'>Back</Button>
   
      </Box>
     </Card>
 
      </FormControl>
  );
};

export default AddCategory;
