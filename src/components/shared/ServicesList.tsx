import { FC } from 'react';
import Heading from "../UI/Heading.tsx";
import ServicesItem from "./ServicesItem.tsx";


export type APIServicesItem = {
    id: number,
    createdAt: string,
    name: string,
    description: string,
    image: string
};


interface ServicesListProps {
    services: APIServicesItem[],
    title: string
}


const ServicesList: FC<ServicesListProps> = ({services, title}) => {
    if (!services.length) {
        return (
            <Heading>
                Сервисы не найдены!
            </Heading>
        )
    }

    return (
        <div>
            <Heading>
                {title}
            </Heading>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                minWidth: "80vw",
                maxWidth: "80vw",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                {services.map(item =>
                    <ServicesItem key={item.id} item={item} />
                )}
            </div>
        </div>
    );
};


export default ServicesList;
