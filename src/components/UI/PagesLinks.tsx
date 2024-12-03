import { Button } from '@consta/uikit/Button';
import { useNavigate } from "react-router-dom";


const PagesLinks = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    return (
        <div style={{display: "flex"}}>
            <Button
                onClick={() => navigate('/')}
                label="Главная страница"
                view="clear"
            />
            {
                token &&
                <Button
                    onClick={() => navigate('/services')}
                    label="Услуги компании"
                    view="clear"
                />
            }
        </div>
    )
};


export default PagesLinks;
