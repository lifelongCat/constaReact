import { Button } from '@consta/uikit/Button';
import PagesLinks from "./PagesLinks.tsx";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/reducers/userReducer.ts";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store.tsx";


const Header = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header className="footer-header-block">
            <PagesLinks />
            <div className="footer-header-part">
                {
                    user.token
                    ? <Button
                            view="clear"
                            label={user.username}
                            className="footer-header-text"
                            onClick={() => navigate("/profile")}
                        />
                    : null
                }
                {
                    user.token
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
