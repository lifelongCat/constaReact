import { useEffect, useState } from 'react';
import NewsList from "../../components/shared/NewsList.tsx";
import NewsService from "../../API/NewsService.ts";
import Heading from "../../components/UI/Heading.tsx";
import Notification from "../../components/UI/Notification.tsx";


const Home = () => {
    const [news, setNews] = useState([]);
    const [newsError, setNewsError] = useState('');
    const [isNewsLoading, setIsNewsLoading] = useState(false);

    const fetchNews = () => {
        setIsNewsLoading(true);
        NewsService.getAll()
            .then(response => {
                setNews(response);
            }).catch(error =>
            setNewsError(error.message)
            );
        setIsNewsLoading(false);
    }

    useEffect(() => {
        fetchNews()
    }, []);

    return (
        <div>
            {
                (isNewsLoading && <Heading>Загрузка новостей...</Heading>) ||
                <NewsList news={news} title="Новости" />
            }
            {
                newsError &&
                <Notification label={newsError} />
            }
        </div>
    )
};


export default Home;
