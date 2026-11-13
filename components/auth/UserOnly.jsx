import {useUser} from "../../hooks/useUser";
import {useRouter} from "expo-router";
import {useEffect} from "react";
import {Text} from "react-native";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({children})=>{
    const {user, authenticated}=useUser()
    const router = useRouter()

    useEffect(() => {
        if(authenticated && user === null){
            router.replace("/login")

        }

    }, [user, authenticated]);
    if(!authenticated || !user){
        return (
            <ThemedLoader/>
        )
    }

    return children;
}

export default UserOnly