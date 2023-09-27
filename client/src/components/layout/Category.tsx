import { Typography } from "@mui/material";
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
