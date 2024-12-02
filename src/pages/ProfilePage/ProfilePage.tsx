import { useSelector } from "react-redux";
import { RootState } from "../../store/store.tsx";
import Heading from "../../components/UI/Heading.tsx";
import { Text } from "@consta/uikit/Text";


const Profile = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div>
            <Heading>Ваш профиль</Heading>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "5vh"
            }}>
                <div style={{marginRight: "3vw"}}>
                    <Text style={{fontSize: "1.5rem"}}>{user.firstName} {user.lastName}</Text>
                    <Text style={{color: "gray", marginBottom: "3vh"}}>aka {user.username}</Text>
                    <Text style={{marginBottom: "1vh"}}><b>Email</b>: {user.email}</Text>
                    <Text style={{marginBottom: "1vh"}}><b>Пол</b>: {user.gender}</Text>
                </div>
                <div style={{marginLeft: "3vw"}}>
                    <img
                        src={user.image}
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
    )
};

export default Profile;
