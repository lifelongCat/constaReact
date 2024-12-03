import { Responses404 } from '@consta/uikit/Responses404';
import { Button } from "@consta/uikit/Button";
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Responses404
            actions={<Button
                view="ghost"
                label="Вернуться назад"
                onClick={() => navigate(-1)}
            />}
        />
    )
};

export default NotFound;
