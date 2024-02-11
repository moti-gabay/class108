import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { CHECK_TOKEN_ADMIN, TOKEN_KEY } from '../constants/url';


const AuthAdmin = () => {
    const nav = useNavigate();

    const checkAdminToken = async () => {
        try {
          const { data } = await axios.get(CHECK_TOKEN_ADMIN, {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': localStorage.getItem(TOKEN_KEY) || '',
            },
          });  
          console.log(data);
                  
        } catch (error) {  
          console.log(error);
          
          nav('/');
        }
      };



    useEffect(() => {
        checkAdminToken();
      },[])
  return (
    <div></div>
  )
}

export default AuthAdmin