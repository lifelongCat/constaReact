import { Button } from '@consta/uikit/Button';
import PagesLinks from "./PagesLinks.tsx";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../../store/reducers/userReducer.ts";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store.tsx";


const Header = () => {
    const user = useSelector((state: RootState) => state.user);
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const decodeToken = (token: string) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }

    useEffect(() => {
        if (!token) return;
        const tokenPayload = decodeToken(token);
        dispatch(setUser({accessToken: token, ...tokenPayload}));
    }, [dispatch, token])

    return (
        <header className="footer-header-block">
            <PagesLinks />
            <div className="footer-header-part">
                {
                    token
                    ? <Button
                            view="clear"
                            label={user.username}
                            className="footer-header-text"
                            onClick={() => navigate("/profile")}
                        />
                    : null
                }
                {
                    token
                    ? <Button
                            view="clear"
                            label="Выход"
                            onClick={() => {dispatch(clearUser()); navigate("/login")}}
                        />
                    : <Button
                            view="clear"
                            label="Вход"
                            onClick={() => navigate("/login")}
                        />
                }
            </div>
        </header>
    )
};


export default Header;
