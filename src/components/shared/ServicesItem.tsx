import { FC } from 'react';
import { Text } from '@consta/uikit/Text';
import { APIServicesItem } from "./ServicesList.tsx";


interface ServicesItemProps {
    item: APIServicesItem
}


const ServicesItem: FC<ServicesItemProps> = ({item}) => {
    return (
        <div style={{
            flex: "0 0 28%",
            border: "0.15vh solid #406b85",
            borderRadius: "10px",
            padding: "1em 1em",
            marginBottom: "5vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{width: "45%", height: "100%"}}>
                <img
                    src={item.image}
                    alt="avatar"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid gray",
                        borderRadius: "5%",
                        boxShadow: "0 0 7px #666"
                    }}
                />
            </div>
            <div style={{width: "45%", height: "100%"}}>
                <Text>{item.name}</Text>
                <Text style={{color: "gray", marginBottom: "3vh", fontSize: "0.6rem"}}>{item.description}</Text>
                <Text style={{marginBottom: "1vh", fontSize: "0.6rem"}}>{item.createdAt}</Text>
            </div>
        </div>
    );
};


export default ServicesItem;
