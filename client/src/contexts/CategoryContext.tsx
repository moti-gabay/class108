import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
} from "react";
import { useEffect } from "react";

export type Category = {
    name: string;
    id: string;
  };
  
  export interface CategoryContextInterFace {
    category: Category;
    setCategory:Dispatch<SetStateAction<Category>>;
  }
  
  const initialState = {
    category:
    {
      name:"",
      id:""
    },
    setCategory:(category: Category) => {},
  } as CategoryContextInterFace;
  
  export const CategoryContext = createContext(initialState);

  type CategoryProviderProps = {
    children : ReactNode
  }
  
  export default function CategoryProvider({ children }: CategoryProviderProps) {
    const [category,setCategory] = useState<Category>(
      {
        name:"",
        id:"",
      },
    );
  
    const getCategoryReq = async () => {
      const { data } = await axios.get(
        "http://localhost:3003/category/categoryList"
      );
      console.log(data);
      setCategory(data)
    };
  
    useEffect(() => {
      //getCategoryReq();
    }, []);
  
    return (
      <CategoryContext.Provider  value={ category , setCategory}>
        {children}
      </CategoryContext.Provider>
    )
  }