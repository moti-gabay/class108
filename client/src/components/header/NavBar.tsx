import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createSvgIcon } from "@mui/material/utils";
import { useNavigate } from "react-router-dom";
import img from "../../assets/linksimg.png";
import userImg from "../../assets/icons8-user-32.png";
import { blue } from "@mui/material/colors";
import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../types/types";
import { LOGIN_REQ, TOKEN_KEY } from "../../constants/url";
import axios from "axios";

export default function PrimarySearchAppBar() {
  const [isGust, setIsGust] = useState(false);
  const nav = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const getToken = () => {
    if(localStorage.getItem(TOKEN_KEY)){
      setIsGust(false);
    }else{
      setIsGust(true)
    }
  };

 const loginReq = async (user: User) => {
    try {
      const { data } = await axios.post(LOGIN_REQ, user);

      if (data.token.role === "admin") {
        localStorage.setItem(TOKEN_KEY, data.token.token);
        setIsGust(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<User> = (data: User) => {
    loginReq(data);
    reset();
  };
  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );

  // const { inputValue, setInputValue, clearInput } = useContext(InputContext);

  useEffect(() => {
    getToken();
  }, [localStorage.getItem(TOKEN_KEY)]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            onClick={() => nav("/")}
            src={img}
            style={{
              padding: "px",
              width: "50px",
              borderRadius: "50px",
              border: "1px solid white ",
            }}
            alt=""
          />
          <Box sx={{ textAlign: "canter", flexGrow: 1 }} />

          {isGust && 
            <Dropdown>
              <MenuButton sx={{ background: blue[400], borderRadius: "10%" }}>
                <Icon style={{ display: "flex", justifyContent: "center" }}>
                  <img src={userImg} alt="" />
                </Icon>{" "}
              </MenuButton>

              <Menu sx={{ width: "250px", height: "220px", margin: "0 auto" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  login
                </Typography>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ padding: "20px", display: "" }}
                >
                
                  <Input
                  id="name"
                    {...register("name", {
                      required: { value: true, message: "Name required" },
                      minLength: { value: 2, message: "min 2 chars" },
                      maxLength: { value: 14, message: "max 14 chars" },
                    })}
                    sx={{
                      width: "100%",
                      margin: "3px",
                      borderRadius: "10px",
                      border: "1px solid black",
                    }}
                    placeholder="name"
                  />
                  {errors.name && (
                    <p className="m-0 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                 

                  <Input
                  id="password"
                    {...register("password", {
                      required: { value: true, message: "password required" },
                      minLength: { value: 2, message: "min 2 chars" },
                      maxLength: { value: 14, message: "max 14 chars" },
                    })}
                    sx={{
                      width: "100%",
                      margin: "3px",
                      borderRadius: "10px",
                      border: "1px solid black",
                    }}
                    placeholder="password..."
                  />
                  {errors.password && (
                    <p className="m-0 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="small"
                    sx={{ padding: "3px", margin: "10px 80px" }}
                    variant="contained"
                  >
                    login
                  </Button>
                </form>
              </Menu>
            </Dropdown>
          }
      {  !isGust &&    <Button
              sx={{ background: blue[400] }}
              onClick={() => nav("/addLink")}
              variant="contained"
            >
              <Icon style={{ display: "flex", justifyContent: "center" }}>
                <PlusIcon fontSize="small" style={{}} />
              </Icon>
            </Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
