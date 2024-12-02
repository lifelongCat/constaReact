import { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";


interface ProtectedRouteProps {
    children: ReactElement
}


const ProtectedRoute: FC<ProtectedRouteProps> = ({children}) => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.token) {
            navigate("/login")
        }
    }, [user, navigate]);

    return (
        <div>
            {children}
        </div>
    )
}


export default ProtectedRoute;
