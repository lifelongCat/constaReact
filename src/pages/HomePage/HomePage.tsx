import { useEffect, useState } from 'react';
import NewsList from "../../components/shared/NewsList.tsx";
import NewsService from "../../API/NewsService.ts";
import Heading from "../../components/UI/Heading.tsx";
import Notification from "../../components/UI/Notification.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";
import { setNews } from "../../store/reducers/newsReducer.ts";


const Home = () => {
    const [newsError, setNewsError] = useState('');
    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.news.list);
    const [isNewsLoading, setIsNewsLoading] = useState(false);

    useEffect(() => {
        if (news.length) return;
        setIsNewsLoading(true);
        NewsService.getAll()
            .then(response =>
                dispatch(setNews(response))
            ).catch(error =>
                setNewsError(error.message)
            ).finally(() =>
                setIsNewsLoading(false)
            );
    }, [dispatch, news.length]);

    return (
        <div>
            {
                isNewsLoading
                ? <Heading>Загрузка новостей...</Heading>
                : <NewsList news={news} title="Новости" />
            }
            {
                newsError &&
                <Notification label={newsError} />
            }
        </div>
    )
};


export default Home;
