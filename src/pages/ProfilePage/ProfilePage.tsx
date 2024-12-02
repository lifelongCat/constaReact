import { useEffect, useState } from "react";
import UserService from "../../API/UserService.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";
import Heading from "../../components/UI/Heading.tsx";
import Notification from "../../components/UI/Notification.tsx";
import {Text} from "@consta/uikit/Text";


export type APIProfile = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    image: string
};


const Profile = () => {
    const user = useSelector((state: RootState) => state.user);
    const [profile, setProfile] = useState<APIProfile>({
        email: "",
        firstName: "",
        gender: "",
        id: 0,
        image: "",
        lastName: "",
        username: ""
    });
    const [profileError, setProfileError] = useState('');
    const [isProfileLoading, setIsProfileLoading] = useState(false);

    const fetchProfile = () => {
        setIsProfileLoading(true);
        // @ts-expect-error on this page user.token will never null
        UserService.getProfile(user.token)
            .then(response => {
                setProfile(response);
            }).catch(error =>
                setProfileError(error.message)
            );
        setIsProfileLoading(false);
    }

    useEffect(() => {
        fetchProfile()
    });

    return (
        <div>
            {
                isProfileLoading
                ? <Heading>Загрузка профиля...</Heading>
                : <div>
                    <Heading>Ваш профиль</Heading>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: "5vh"
                    }}>
                        <div style={{marginRight: "3vw"}}>
                            <Text style={{fontSize: "1.5rem"}}>{profile.firstName} {profile.lastName}</Text>
                            <Text style={{color: "gray", marginBottom: "3vh"}}>aka {profile.username}</Text>
                            <Text style={{marginBottom: "1vh"}}><b>Email</b>: {profile.email}</Text>
                            <Text style={{marginBottom: "1vh"}}><b>Пол</b>: {profile.gender}</Text>
                        </div>
                        <div style={{marginLeft: "3vw"}}>
                            <img
                                src={profile.image}
                                alt="avatar"
                                style={{
                                    border: "1px solid gray",
                                    borderRadius: "100%",
                                    boxShadow: "0 0 7px #666"
                                }}
                            />
                        </div>
                    </div>
                </div>
            }
            {
                profileError &&
                <Notification label={profileError}/>
            }
        </div>
    )
};

export default Profile;
