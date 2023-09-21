import { Typography } from "@mui/material";
import CardLink from "./CardLink";
import { useEffect, useState } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";
import { useContext } from "react";
import axios from "axios";
import { LinkContext } from "../../contexts/LinkContext";
import { CATEGORY_LIST_ROUTE, LINK_LIST_ROUTE } from "../../constants/url";

interface Category {
  _id: string;
  name: string;
}

interface LinksPro {
  category: string;
  name: string;
  url: string;
  _id: string;
}

const Category = () => {
  // const { category } = useContext(CategoryContext)
  // const {link} = useContext(LinkContext)
  const [toggle, setToggle] = useState(false);

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
    console.log(data);
    setLinks(data);
  };

  const getCategoryReq = async () => {
    const { data } = await axios.get(CATEGORY_LIST_ROUTE);
    console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    getCategoryReq();
    getLinksReq()
  }, []);

  return (
    <div>
      {categories?.map(({ name }) => {
        return (
          <div>
            <div>
              <Typography
                onClick={() => setToggle(true)}
                fontSize={30}
                sx={{ borderBottom: 1, display: "flex" }}
              >
                {name}
              </Typography>
            </div>

            <Typography sx={{ display: "flex" }}>
              {link?.map(
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
          </div>
        );
      })}
    </div>
  );
};

export default Category;
