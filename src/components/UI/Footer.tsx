import { Text } from "@consta/uikit/Text";
import PagesLinks from "./PagesLinks.tsx";


const Footer = () => {
    return (
        <footer className="footer-header-block">
            <PagesLinks />
            <div className="footer-header-part">
                <Text className="footer-header-text">
                    (c) Привет, мир! {new Date().getFullYear()}
                </Text>
            </div>
        </footer>
    )
};


export default Footer;
