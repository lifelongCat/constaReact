import { FC } from 'react';
import { Informer } from "@consta/uikit/Informer";


interface NotificationProps {
    label: string
}


const Notification: FC<NotificationProps> = ({label}) => {
    return (
        <div>
            <Informer
                title="Произошла ошибка!"
                label={label}
                status="alert"
                view="outline"
                style={{
                    position: "absolute",
                    right: "3vw",
                    top: "6vh"
                }}
            />
        </div>
    )
}


export default Notification;
