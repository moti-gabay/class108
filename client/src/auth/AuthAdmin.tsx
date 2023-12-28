import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { CHECK_TOKEN_ADMIN } from '../constants/url';


const AuthAdmin = () => {
    const nav = useNavigate();

const checkAdminToken  = async() => {
    try {
        const {data} = await axios.get(CHECK_TOKEN_ADMIN)
        console.log(data);
    } catch (error) {
        nav("*"); 
    }
}



    useEffect(() => {
        checkAdminToken();
      },[])
  return (
    <div></div>
  )
}

export default AuthAdmin