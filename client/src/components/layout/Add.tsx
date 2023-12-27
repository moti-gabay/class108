import { useState } from 'react'
import AddLink from '../../forms/addLink';
import AddCategory from '../../forms/AddCategory';
import { Button } from '@mui/joy';


const Add = () => {
    const [add,setAdd] = useState(true)
  return (
    <div style={{justifyContent:"center",height:"calc(100vh - 68.48px)"}}>
        <div style={{width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button sx={{width:"20%",fontSize:"20px"}} onClick={()=>setAdd(!add)} color='danger'>Add {add ? "category" : "link"}</Button>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        {add &&
        <AddLink/>}
        {!add &&
        <AddCategory/>}
        </div>
       
    </div>
  )
}

export default Add;