import { Container, Input, Typography, alpha, styled } from "@mui/material";
import CardLink from "./CardLink";
import { lightBlue, teal,blue } from '@mui/material/colors';

import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url";
import { Category, Link } from "../../types/types";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  top: "-50px",
  right: "150px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "30%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 25),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Categories = () => {
  const [search, setSearch] = useState("");
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
  const [filterLinks, setFilterLinks] = useState<Link[]>([
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

  const input = () => {
    let filtered = links.filter((item) =>
      item.name.toLowerCase().includes(search?.toLowerCase())
    );
    setFilterLinks(filtered);
    console.log(filtered);
  };

  useEffect(() => {
    getCategoryReq();
    getLinksReq();
    console.log(search);
  }, [search]);
  const onClick = () => {
    setSearch("");
    console.log("reast");
  };
  return (
    <div>
      <Search
      sx={{background:blue[400],position:"relative" ,left:"70px" ,border:"1px solid white",borderRadius:"10px" }}
       onClick={() => setSearch("")}
       style={{ width: "240px", marginRight: "" }}>
        
        <SearchIconWrapper>
        {search !== '' && <ClearIcon style={{ fontSize:"20px",color:"white",background:"" ,borderRadius:"50%"}} />}  
        </SearchIconWrapper>
        <Input
        sx={{paddingX:"5px"}}
          value={search}
          placeholder="  Search....  "
          // className="form-control"
          onInput={input}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Search>
    {search !== "" &&
    <div>
<Typography style={{ textAlign:"center" }} variant="h5">
     תוצאות חיפוש:
   </Typography>{" "}
      <Container 
        sx={{background:blue[100],border:"1px solid black",borderRadius:"10px", display: "flex", flexWrap: "nowrap", overflow: "auto", padding:"10px",width:"80%" }}
      >
        
        {search !== "" ? filterLinks.map((linked) => {
            return (
              <Grid key={linked._id} sx={{ flex: "0 0 auto", marginRight: 2 }}>
                <CardLink
                  name={linked.name}
                  category={linked.category}
                  url={linked.url}
                  _id={linked._id}
                />
              </Grid>
            );
          
        }):"אין תוצאות חיפוש..."}
      </Container>
    </div>
     }
      
      <Container sx={{padding:"20px",width:"85%"}}>
      {categories.map(({ name, _id }) => {
        return (
<Accordion  style={{background:blue[300],textAlign:"center"}} key={_id}>
            <AccordionSummary
            
              sx={{ margin: 2,textAlign:"center"}}
              expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize={20} color={"white"} sx={{}} fontWeight="fontWeightBold">{name}</Typography>
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
      </Container>
   
    </div>
  );
};

export default Categories;
