import { Typography } from "@mui/material";
import CardLink from "./CardLink";



const Category = () => {
  return (

    <div >
      <Typography fontSize={30} sx={{borderBottom:1 ,display:"flex",justifyContent:"center"}} >
     שם קטגוריה:LIBRARIES
      </Typography>
      <Typography sx={{display:"flex"}} >
      <CardLink/>
        <CardLink/>
        <CardLink/>
        <CardLink/>
      </Typography>
       
    </div>
  )
}

export default Category;