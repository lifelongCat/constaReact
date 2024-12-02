import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import PagesLinks from "./PagesLinks.tsx";


const Header = () => {
    return (
        <header className="footer-header-block">
            <PagesLinks />
            <div className="footer-header-part">
                <Text className="footer-header-text">ФИО</Text>
                <Button label="Выход" view="clear"/>
            </div>
        </header>
    )
};


export default Header;
