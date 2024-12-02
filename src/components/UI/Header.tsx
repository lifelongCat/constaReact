import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
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
                    user.token ? <Text className="footer-header-text">{user.username}</Text> : null
                }
                {
                    user.token
                    ? <Button onClick={() => dispatch(clearUser())} label="Выход" view="clear"/>
                    : <Button onClick={() => navigate('/login')} label="Вход" view="clear"/>
                }
            </div>
        </header>
    )
};


export default Header;
