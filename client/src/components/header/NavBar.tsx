import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { createSvgIcon } from '@mui/material/utils';
import { useNavigate } from 'react-router-dom';

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );
const nav = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
<Button
onClick={() => nav("/addLink")}
variant="contained" color="success">
  הוספה 
  <Icon style={{display:"flex"}} > <PlusIcon fontSize='small' style={{paddingRight:7}}/></Icon>
</Button>          </IconButton>
         
          <Box sx={{ flexGrow: 1 }} />
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            פיתוח IT לאמל"ח
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
           
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
  );
}
