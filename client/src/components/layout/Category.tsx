import { Typography, alpha, styled } from "@mui/material";
import CardLink from "./CardLink";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url";
import { Category, Link } from "../../types/types";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 25),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Categories = () => {

  const [search, setSearch] = useState('');
  const searchRef = useRef()

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  } 


  
  const [categories, setCategory] = useState<Category[]>([
    {
      name: "",
      _id: "",
    },
  ]);

  const [links, setLinks] = useState<Link[]>([
    {
      category: "",
      name: "",
      url: "",
      _id: "",
    },
  ]);
  const getLinksReq = async () => {
    const { data } = await axios.get(LINK_LIST_ROUTE);
    setLinks(data);
  };

  const getCategoryReq = async () => {
    const { data } = await axios.get(CATEGORY_LIST_ROUTE);
    setCategory(data);
  };

  useEffect(() => {
    getCategoryReq();
    getLinksReq();
  }, []);

  return (
    <div>
       
       <Search>
            <SearchIconWrapper >
              <SearchIcon     />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="חפש..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      {categories.map(({ name }) => {
        return (
          <Accordion>
            <AccordionSummary
              sx={{ margin: 2 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize={20}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ display: "flex", flexWrap: "nowrap", overflowY: "auto" }}
            >
              {links.map(
                (linked) =>
                  linked?.category === name && (
                    <Grid
                      key={linked._id}
                      sx={{ flex: "0 0 auto", marginRight: 2 }}
                    >
                      <CardLink
                        name={linked.name}
                        category={linked.category}
                        url={linked.url}
                        _id={linked._id}
                      />
                    </Grid>
                  )
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Categories;
