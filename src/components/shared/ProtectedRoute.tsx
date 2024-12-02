import { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface ProtectedRouteProps {
    children: ReactElement
}


const ProtectedRoute: FC<ProtectedRouteProps> = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token, navigate]);

    return (
        <div>
            {children}
        </div>
    )
}


export default ProtectedRoute;
