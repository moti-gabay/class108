import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
} from "react";
import { useEffect } from "react";

export type Link = {
  name: string;
  url: string;
  category: string;
  id: string;
};


export interface LinkContextInterFace {
  link: Link;
  setLink: Dispatch<SetStateAction<Link>>;
  AddLinkReq:Dispatch<SetStateAction<Link>>;
}

const initialState = {
  link: 
    {
      name: "",
      url: "",
      category: "",
      id: "",
    }
  ,
  setLink: (link: Link) => {},
  AddLinkReq:(link: Link) => {},
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
      id: "",
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

  const getLinkListReq = async () => {
    const { data } = await axios.get("http://localhost:3003/links/linksList");
    console.log(data);
    setLink(data);
  };

  useEffect(() => {
    //getLinkListReq();
  }, []);

  return (
    <LinkContext.Provider value={{ link, setLink , AddLinkReq }}>
      {children}
    </LinkContext.Provider>
  );
}
