import { FC } from 'react';
import { APINewsItem } from "./NewsList.tsx";
import { Text } from '@consta/uikit/Text';


interface NewsItemProps {
    item: APINewsItem
}


const NewsItem: FC<NewsItemProps> = ({item}) => {
    return (
        <div style={{
            border: "0.15vh solid #406b85",
            borderRadius: "10px",
            padding: "1em 1em",
            marginBottom: "2vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <Text style={{marginBottom: "1vh"}}>{item.name}</Text>
            <Text style={{marginBottom: "1vh"}}>{item.description}</Text>
            <Text style={{alignSelf: "flex-end"}}>{item.createdAt}</Text>
        </div>
    );
};


export default NewsItem;
