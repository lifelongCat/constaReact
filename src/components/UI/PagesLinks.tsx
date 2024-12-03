import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from '@consta/uikit/Tabs';


const PagesLinks = () => {
    const token = localStorage.getItem("token");
    const location = useLocation();
    const navigate = useNavigate();

    type URL = {
        label: string;
        link: string;
        auth_required: boolean;
    };

    const urls: URL[] = [
        { label: "Главная страница", link: "/", auth_required: false },
        { label: "Услуги компании", link: "/services", auth_required: true },
    ];

    const [currentURL, setCurrentURL] = useState<URL | null>(
        urls.find((i) => i.link === location.pathname) || null,
    );

    useEffect(() => {
        setCurrentURL(urls.find((i) => i.link === location.pathname) || null);
        // eslint-disable-next-line
    }, [location.pathname]);

    return (
        <Tabs
            value={currentURL}
            onChange={(item) => {
                setCurrentURL(item);
                navigate(item.link);
            }}
            items={urls.filter((url) => token || !url.auth_required)}
            view="clear"
        />
    )
};


export default PagesLinks;
