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

export type Category = {
  name: string;
  id: string;
};

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
      id: "",
    }
  ,
  setLink: (link: Link) => {},
} as LinkContextInterFace;

export const LinkContext = createContext(initialState);

type LinkProviderProps = {
  children: ReactNode;
};

export default function LinkProvider({ children }: LinkProviderProps) {
  const [link, setLink] = useState<Link[]>([
    {
      name: "",
      url: "",
      category: "",
      id: "",
    },
  ]);

  const getCategoryReq = async () => {
    const { data } = await axios.get(
      "http://localhost:3003/category/categoryList"
    );
    console.log(data);
  };
  const getLinkListReq = async () => {
    const { data } = await axios.get("http://localhost:3003/links/linksList");
    console.log(data);
    setLink(data);
  };

  useEffect(() => {
    // getCategoryReq();
    // getLinkListReq();
  }, []);

  return (
    <LinkContext.Provider value={{ link, setLink }}>
      {children}
    </LinkContext.Provider>
  );
}
