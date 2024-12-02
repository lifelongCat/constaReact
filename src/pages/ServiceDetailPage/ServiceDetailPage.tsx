import { useParams } from "react-router-dom";
import Heading from "../../components/UI/Heading.tsx";
import { useEffect, useState } from "react";
import ServicesService from "../../API/ServicesService.ts";
import Notification from "../../components/UI/Notification.tsx";
import { APIServicesItem } from "../../components/shared/ServicesList.tsx";
import {Text} from "@consta/uikit/Text";


const ServiceDetail = () => {
    const params = useParams();
    const [service, setService] = useState<APIServicesItem>({
        id: 0,
        createdAt: "",
        name: "",
        description: "",
        image: ""
    });
    const [serviceError, setServiceError] = useState('');
    const [isServiceLoading, setIsServiceLoading] = useState(false);

    useEffect(() => {
        setIsServiceLoading(true);
        // @ts-expect-error this is concrete service page, id always exists
        ServicesService.getByID(params.id)
            .then(response => {
                setService(response)
            }).catch(error =>
                setServiceError(error.message)
            ).finally(() =>
                setIsServiceLoading(false)
            );
    }, [params.id]);

    return (
        <div>
            {
                isServiceLoading
                ? <Heading>Загрузка информации о сервисе...</Heading>
                : <div>
                        <Heading>Сервис #{params.id}</Heading>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "5vh",
                            minWidth: "40vw",
                            maxWidth: "40vw",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <div style={{width: "45%", height: "100%"}}>
                                <img
                                    src={service.image}
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
                                <Text style={{fontSize: "1.5rem"}}>{service.name}</Text>
                                <Text style={{
                                    color: "gray",
                                    marginBottom: "3vh",
                                }}>{service.description}</Text>
                                <Text style={{marginBottom: "1vh"}}>{service.createdAt}</Text>
                            </div>
                        </div>
                    </div>
            }
            {
                serviceError &&
                <Notification label={serviceError}/>
            }
        </div>
    )
};


export default ServiceDetail;
