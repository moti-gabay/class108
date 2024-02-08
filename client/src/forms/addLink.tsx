import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import { Box, Card } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Category, Link } from "../types/types";
import { blue } from "@mui/material/colors";
import {
  ADD_LINK_ROUTE,
  CATEGORY_LIST_ROUTE,
  TOKEN_KEY,
} from "../constants/url";

const AddLink: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<Link>();
  const nav = useNavigate();

  const [categories, setCategories] = React.useState<Category[]>([]);
  const getCategoryReq = async () => {
    try {
      const { data } = await axios.get(CATEGORY_LIST_ROUTE);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getCategoryReq();
  }, []);

  const onSubmit = async (data: Link) => {
    console.log(data);
    reset();
    try {
      await axios.post(ADD_LINK_ROUTE, data, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage[TOKEN_KEY] || "",
        },
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl sx={{ m: 1, width: "30%", text: "white", height: "auto" }}>
      <Card sx={{ background: blue[200] }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Add Link Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name"></label>
          <TextField
          id="name"
          // data-testid="name"
          placeholder="name"
             inputProps={{ "data-testid": "name" }}
            {...register("name", { required: true })}
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
                    placeholder="url"

             inputProps={{ "data-testid": "url" }}
            {...register("url", { required: true })}
            label="URL"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <Select
            data-testid="select"
              //  inputProps={{ "data-testid": "category" }}
              {...register("category", { required: true })}
              label="Category"
            >
              {categories?.map((cate) => (
                <MenuItem key={cate._id} value={cate.name}>
                  {cate.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button  type="submit" variant="contained" color="success">
              Add
            </Button>
            <Button onClick={() => nav(-1)} variant="contained" color="primary">
              Back
            </Button>
          </Box>
        </form>
      </Card>
    </FormControl>
  );
};

export default AddLink;
