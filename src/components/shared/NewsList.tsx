import { FC } from 'react';
import NewsItem from "./NewsItem.tsx";
import Heading from "../UI/Heading.tsx";


export type APINewsItem = {
    id: number,
    createdAt: string,
    name: string,
    description: string
};


interface NewsListProps {
    news: APINewsItem[],
    title: string
}


const NewsList: FC<NewsListProps> = ({news, title}) => {
    if (!news.length) {
        return (
            <Heading>
                Новости не найдены!
            </Heading>
        )
    }

    return (
        <div>
            <Heading>
                {title}
            </Heading>
            <div style={{
                minWidth: "80vw",
                maxWidth: "80vw",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                {news.map(item =>
                    <NewsItem item={item} />
                )}
            </div>
        </div>
    );
};


export default NewsList;
