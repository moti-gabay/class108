import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Link = () => {
const nav = useNavigate()
  return (
    <Typography sx={{}}>
      <Typography sx={{fontSize:50, display:"flex", justifyContent:"center"}}>
      תיאור קישור  . . .  .

      </Typography>
      <Button variant="contained" sx={{marginRight:50}} onClick={()=> nav(-1)}>חזרה</Button>
      </Typography>
  )
}

export default Link;