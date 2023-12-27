import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
} from "react";
import { useEffect } from "react";
import { LINK_INFO_ROUTE } from "../constants/url";
import { Link } from "../types/types";

export interface LinkContextInterFace {
  link: Link;
  setLink: Dispatch<SetStateAction<Link>>;
}

const initialState = {
  link: 
    {
      name: "",
      url: "",
      category: "",
      _id: "",
    }
  ,
  setLink: (link: Link) => {},
} as LinkContextInterFace;

export const LinkContext = createContext(initialState);
type LinkProviderProps = {
  children: ReactNode;
};

export default function LinkProvider({ children }: LinkProviderProps) {
  const [link, setLink] = useState<Link>(
    {
      name: "",
      url: "",
      category: "",
      _id: "",
    },

  );


  const AddLinkReq = async() => {
    try {
      const {data} = await axios.post("http://localhost:3003/links/addLink",formData)
      console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  }
  const getLinkInfo = async (link : Link) => {
    try {
      const { data } = await axios.get(LINK_INFO_ROUTE + link.id);
    return  data;
    } catch (error) {
      console.log(error);
    }
  };
  const getLinkListReq = async () => {
    const { data } = await axios.get("http://localhost:3003/links/linksList");
    console.log(data);
    setLink(data);
  };
  const deleteLink = async (id : string) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3003/links/${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    //getLinkListReq();
  }, []);

  return (
    <LinkContext.Provider value={{ link, setLink }}>
      {children}
    </LinkContext.Provider>
  );
}
 