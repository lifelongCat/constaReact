import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userReducer.ts';
import UserService from "../../API/UserService.ts";
import { useNavigate } from "react-router-dom";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { MouseEvent, useState } from "react";
import Heading from "../../components/UI/Heading.tsx";
import Notification from "../../components/UI/Notification.tsx";


const Auth = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginUser = async (e: MouseEvent) => {
        e.preventDefault();
        setIsLoginLoading(true);
        await UserService.login(credentials.username, credentials.password)
            .then(response => {
                dispatch(setUser(response));
                navigate("/");
            }).catch(error => {
                setLoginError(error.message);
            });
        setIsLoginLoading(false);
    }

    return (
        <div>
            {
                loginError &&
                <Notification label={loginError} />
            }
            <Heading>Войти в аккаунт</Heading>
            <form style={{
                minWidth: "50vw",
                maxWidth: "50vw",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <TextField
                    required
                    type="text"
                    label="Логин"
                    placeholder="Введите логин"
                    style={{marginBottom: "4vh"}}
                    value={credentials.username}
                    onChange={e => setCredentials({...credentials, username: !e ? '' : e})}
                />
                <TextField
                    required
                    type="password"
                    label="Пароль"
                    placeholder="Введите пароль"
                    style={{marginBottom: "4vh"}}
                    value={credentials.password}
                    onChange={e => setCredentials({...credentials, password: !e ? '' : e})}
                />
                <Button onClick={LoginUser} view="secondary" label="Войти"/>
            </form>
            {
                isLoginLoading &&
                <Heading>Идёт загрузка...</Heading>
            }
        </div>
    )
};


export default Auth;
