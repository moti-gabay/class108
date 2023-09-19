import { Typography } from "@mui/material";
import CardLink from "./CardLink";
import { useEffect, useState } from "react";
import axios from "axios";

interface category {
  _id: string;
  name: string;
}
interface linksPro {
  category: string;
  name: string;
  url: string;
  _id: string;
}

const Category = () => {
  const [category, setCategory] = useState<category[]>([
    {
      _id: "",
      name: "",
    },
  ]);
  const [links, setLinks] = useState<linksPro[]>([
    {
      category: "",
      name: "",
      url: "",
      _id: "",
    },
  ]);

  const getCategoryReq = async () => {
    const { data } = await axios.get(
      "http://localhost:3003/category/categoryList"
    );
    console.log(data);
    setCategory(data);
  };
  const getLinkListReq = async () => {
    const { data } = await axios.get("http://localhost:3003/links/linksList");
    console.log(data);
    setLinks(data)
  };

  useEffect(() => {
    getCategoryReq();
    getLinkListReq();
  }, []);
  return (
    <div>
      {category.map(({ name }) => {
        return (
          <div>
            <Typography fontSize={30} sx={{ borderBottom: 1, display: "flex" }}>
              {name}
            </Typography>
            <Typography sx={{ display: "flex" }}>
            {/* { links.category === name &&  "moti" } */}
              {/* {link.map(({ category, name, url, _id }) => {
                return (
                  <CardLink
                    name={name}
                    category={category}
                    url={url}
                    _id={_id}
                  />
                );
              })} */}
            </Typography>
          </div>
        );
      })}
      {/* <Typography fontSize={30} sx={{borderBottom:1 ,display:"flex",justifyContent:"center"}} >
     שם קטגוריה:LIBRARIES
      </Typography>
      <Typography sx={{display:"flex"}} >
      <CardLink/>
        <CardLink/>
        <CardLink/>
        <CardLink/>
      </Typography>
      <Typography fontSize={30} sx={{borderBottom:1 ,display:"flex",justifyContent:"center"}} >
     שם קטגוריה:LIBRARIES
      </Typography>
      <Typography sx={{display:"flex"}} >
      <CardLink/>
        <CardLink/>
        <CardLink/>
        <CardLink/>
      </Typography> */}
    </div>
  );
};

export default Category;
