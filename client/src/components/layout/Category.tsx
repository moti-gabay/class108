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
  const [toggle,setToggle] = useState(false)
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
    setLinks(data);
  };

  useEffect(() => {
    getCategoryReq();
    getLinkListReq();
    console.log(links);
  }, []);
  return (
    <div>
      {category.map(({ name }) => {
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

              {links.map(
                (link) =>
                  link?.category === name && (
                    <CardLink
                      name={name}
                      category={link.category}
                      url={link.url}
                      _id={link._id}
                    />
                  )
              )}
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
