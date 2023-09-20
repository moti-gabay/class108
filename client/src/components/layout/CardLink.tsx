import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { LinkContext } from "../../contexts/LinkContext";
import { useContext , useEffect} from "react" 

interface links{
  category:string;
  name:string;
  url:string;
  _id:string;
}
interface Props{
  category:string;
  name:string;
  url:string;
  _id:string;
}

export default function CardLink(props: Props) {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const { link , setLink } = useContext(LinkContext)

  const nav =  useNavigate()

  useEffect(() => {
        
  },[])

  return (
    <Card sx={{ minWidth: 247 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         {link.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         {link.category}
        </Typography>
        <Typography variant="h5" component="div">
          <ColorButton onClick={()=>nav(`/cardLink/${props._id}`)} variant="contained">פתיחה</ColorButton>
        </Typography>
      </CardContent>
      <CardActions >
      <Button variant="contained" color="error" endIcon={<DeleteIcon style={{paddingRight:10}} />}>
מחיקה
</Button>
<Button variant="contained" endIcon={<EditIcon style={{paddingRight:10}}/>}>
      עדכון
      </Button>
      </CardActions>
    </Card>
  );
}
