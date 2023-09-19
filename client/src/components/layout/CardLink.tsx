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

interface props{
  
}

export default function CardLink() {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  const nav =  useNavigate()
  return (
    <Card sx={{ minWidth: 247 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          תיאור: 
           MUI
        </Typography>
        <Typography variant="h5" component="div">
          <ColorButton onClick={()=>nav("/cardLink")} variant="contained">פתיחה</ColorButton>
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
