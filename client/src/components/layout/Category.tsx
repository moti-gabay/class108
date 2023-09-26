import { Typography } from "@mui/material";
import CardLink from "./CardLink";
import { useEffect, useState } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";
import { useContext } from "react";
import axios from "axios";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url";
import { Category, LinksPro } from "../../types/types";



const Category = () => {

  const [categories, setCategory] = useState<Category[]>([
    {
      _id: "",
      name: "",
    },
  ]);

  const [links, setLinks] = useState<LinksPro[]>([
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
              sx={{ margin: 2, display: "flex" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize={20}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ display: "flex" }}>
                {links.map(
                  (linked) =>
                    linked?.category === name && (
                      <CardLink
                        name={linked.name}
                        category={linked.category}
                        url={linked.url}
                        _id={linked._id}
                      />
                    )
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Category;
