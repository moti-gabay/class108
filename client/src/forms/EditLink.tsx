import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
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
  TOKEN_KEY,
} from "../constants/url";
import { Category, Link } from "../types/types";
import { blue } from "@mui/material/colors";

const EditLink: React.FC = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const { register, handleSubmit, setValue } = useForm<Link>({
    defaultValues: {
      category: 'defult category', // Set a default value here
      // ... other fields
    }
  });
  const [categories, setCategories] = React.useState<Category[]>([]);

  const getLinkInfo = async () => {
    try {
      const response = await axios.get(LINK_INFO_ROUTE + id);
      if (response && response.data) {
        setValue("name", response.data.name);
        setValue("url", response.data.url);
        setValue("category", response.data.category);
        console.log("get link info in real");
        
      } else {
        console.log('Unexpected response format:', response);
      }
    } catch (error) {
      console.log('Error fetching link info:', error);
    }
  };

  const getCategoryReq = async () => {
    try {
      const response = await axios.get(CATEGORY_LIST_ROUTE);
      if (response && response.data) {
        setCategories(response.data);
        console.log("get category lisk in real");

      } else {
        console.log('Unexpected response format:', response);
      }
    } catch (error) {
      console.log('Error fetching categories:', error);
    }
  };
  useEffect(() => {
    getCategoryReq();
    getLinkInfo();
  }, []);

  const onSubmit = async (data: Link) => {
    const dataCopy = { ...data } as Partial<Link>;
    delete dataCopy._id;
    try {
      const { data } = await axios.put(EDIT_LINK_ROUTE + id, dataCopy, {
        headers: {
          "x-api-key": localStorage[TOKEN_KEY],
        },
      });
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormControl
      sx={{
        m: 1,
        width: 300,
        marginX: "35%",
        height: "700px",
        padding: "60px",
      }}
    >
      <Card sx={{ background: blue[200] }}>
        <Typography variant="h4" sx={{ textAlign: "center", padding: 2 }}>
          Edit Link Form{" "}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="name"
            inputProps={{ "data-testid": "name" }}
            {...register("name")}
            label="name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            inputProps={{ "data-testid": "url" }}

            {...register("url")}
            label="url"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <Select defaultValue={""}  {...register("category")} label="category">
              {categories?.map((cate) => (
                <MenuItem key={cate._id} value={cate.name}>
                  {cate.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button type="submit" variant="contained" color="success">
              EDIT
            </Button>
            <Button onClick={() => nav(-1)} variant="contained" color="primary">
              BACK
            </Button>
          </Box>
        </form>
      </Card>
    </FormControl>
  );
};

export default EditLink;
