import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";



const LinkInfo = () => {

    const { link , setLink } = useContext()


  const {id} = useParams()
const nav = useNavigate()
const filterLink = 
  return (
    <Typography sx={{}}>
      <Typography sx={{fontSize:50, display:"flex", justifyContent:"center"}}>
      תיאור קישור  . . .  .
{id}
      </Typography>
      <Button variant="contained" sx={{marginRight:50}} onClick={()=> nav(-1)}>חזרה</Button>
      </Typography>
  )
}

export default LinkInfo;