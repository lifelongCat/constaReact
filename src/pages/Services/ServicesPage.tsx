import { useEffect, useState } from 'react';
import ServicesService from "../../API/ServicesService.ts";
import Heading from "../../components/UI/Heading.tsx";
import Notification from "../../components/UI/Notification.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";
import { setServices } from "../../store/reducers/servicesReducer.ts";
import ServicesList from "../../components/shared/ServicesList.tsx";


const ServicesPage = () => {
    const [servicesError, setServicesError] = useState('');
    const dispatch = useDispatch();
    const services = useSelector((state: RootState) => state.services.list);
    const [isServicesLoading, setIsServicesLoading] = useState(false);

    useEffect(() => {
        if (services.length) return;
        setIsServicesLoading(true);
        ServicesService.getAll()
            .then(response =>
                dispatch(setServices(response))
            ).catch(error =>
                setServicesError(error.message)
            ).finally(() =>
                setIsServicesLoading(false)
            );
    }, [dispatch, services.length]);

    return (
        <div>
            {
                isServicesLoading
                ? <Heading>Загрузка сервисов...</Heading>
                : <ServicesList services={services} title="Сервисы" />
            }
            {
                servicesError &&
                <Notification label={servicesError} />
            }
        </div>
    )
};


export default ServicesPage;
