import { useEffect, useState } from 'react';
import NewsList from "../../components/shared/NewsList.tsx";
import { useFetching } from "../../hooks/useFetching.ts";
import NewsService from "../../API/NewsService.ts";
import Heading from "../../components/UI/Heading.tsx";


const Home = () => {
    const [news, setNews] = useState([]);

    const [
        fetchNews,
        isNewsLoading,
        newsError
    ]: [
        (...args: unknown[]) => Promise<void>,
        boolean,
        string
    ] = useFetching(async () => {
        const response = await NewsService.getAll();
        setNews(response);
    })

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
                <Heading>Произошла ошибка: {newsError}</Heading>
            }
        </div>
    )
};


export default Home;
