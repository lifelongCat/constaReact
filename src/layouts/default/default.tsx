import { FC } from 'react';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import Header from "../../components/UI/Header.tsx";
import Footer from "../../components/UI/Footer.tsx"
import { Outlet } from "react-router-dom";
import '../../styles/FooterHeader.css';


const DefaultLayout: FC = () => {
    return (
        <Theme preset={presetGpnDefault}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                minHeight: "100vh",
                maxHeight: "100vh"
            }}>
                <Header />
                <div style={{
                    flexGrow: 1,
                    overflow: "auto"
                }}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </Theme>
    )
};


export default DefaultLayout;
