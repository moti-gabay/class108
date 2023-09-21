import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContext } from "../contexts/LinkContext";
import { useContext } from "react";


const LinkInfo = () => {
  interface linksPro {
    category: string;
    name: string;
    url: string;
    _id: string;
  }
  
    const { link , setLink } = useContext(LinkContext)

//    state.users = state.users.filter((user) => user._id !== action.payload.id);

  const {id} = useParams()
const nav = useNavigate()
const filterLink = link.filter((linked)=>linked._id === id)
  return (
    <Typography sx={{}}>
      <Typography sx={{fontSize:20, display:"flex", justifyContent:"center"}}>
{filterLink[0].name}
      </Typography>
      <Typography sx={{fontSize:20, display:"flex", justifyContent:"center"}}>
{filterLink[0].category}
      </Typography>
      
      <Button variant="contained" sx={{marginRight:50}} onClick={()=> nav(-1)}>חזרה</Button>
      </Typography>
  )
}

export default LinkInfo;