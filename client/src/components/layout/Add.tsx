import AddLink from "../../forms/addLink";
import AddCategory from "../../forms/AddCategory";
import { Button } from "@mui/joy";
import AuthAdmin from "../../auth/AuthAdmin";
import { TOKEN_KEY } from "../../constants/url";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const nav = useNavigate();

  
 
  return (
    <div style={{ justifyContent: "center", height: "calc(100vh - 68.48px)" }}>
      <AuthAdmin />
     
      <div style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
     <AddLink />
     <AddCategory />
      </div>
      <Button
        sx={{
          width: "10%",
          fontSize: "20px",
          background: "grey",
          margin: "10px 45vw",
        }}
        onClick={() => {
          localStorage.removeItem(TOKEN_KEY);
          nav(-1)
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default Add;
