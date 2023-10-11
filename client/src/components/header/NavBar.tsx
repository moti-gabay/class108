import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createSvgIcon } from "@mui/material/utils";
import { useNavigate } from "react-router-dom";
import img from "../../assets/108img.jpeg";
import { green ,lightBlue,blue} from "@mui/material/colors";

export default function PrimarySearchAppBar() {
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
  const nav = useNavigate();
  return (
    
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar>
          <IconButton
          
            edge="start"
            aria-label="open drawer"
            sx={{ }}
            
          >
             <img
            src={img}
            style={{ padding: "px", width: "50px", borderRadius: "50px" ,border:"1px solid white "}}
            alt=""
          />
           
          </IconButton>
          <Box sx={{ textAlign: "canter", flexGrow: 1 }} />
         
          <Button sx={{background:blue[400]}} onClick={() => nav("/addLink")} variant="contained">
              <Icon  style={{ display: "flex",justifyContent:"center" }}>
                {" "}
                <PlusIcon  fontSize="small" style={{ }} />
              </Icon>
            </Button>{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
