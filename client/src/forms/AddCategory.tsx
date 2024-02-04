import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import { Box, Card } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { ADD_CATEGORY_ROUTE, TOKEN_KEY } from "../constants/url";

const AddCategory = () => {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const onSubmit = async ( data : any) => {

    try {
      const { data: responseData } = await axios.post(
        ADD_CATEGORY_ROUTE,
        { name: data.name },
        {
          headers: {
            "x-api-key": localStorage[TOKEN_KEY],
          },
        }
      );
      console.log(responseData);
      
      // reset()      // Handle success, if needed
    } catch (error) {
      console.log(error);
      // Handle error, if needed
    }
  };

  return (
    <FormControl
      sx={{ width: "400px", height: "auto", padding: "60px" }}
    >
      <Card sx={{ background: blue[200] }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Add Category
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("name", { required: true })}
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button type="submit" variant="contained" color="success">
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

export default AddCategory;
