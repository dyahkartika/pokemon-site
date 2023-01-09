import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const pass = searchParams.get('password');

  if(pass !== "secret"){
    return <Navigate to="/unauthorized" replace/>
  }

  return children; 
};

export default ProtectedRoute;
