import {useUser} from "../../hooks/useUser";
import {useRouter} from "expo-router";
import {useEffect} from "react";
import {Text} from "react-native";

const GuestOnly = ({children})=>{
    const {user, authenticated}=useUser()
    const router = useRouter()

    useEffect(() => {
        if(authenticated && user !== null){
            router.replace("/profile")

        }

    }, [user, authenticated]);
    if(!authenticated || user){
        return (
            <Text>Loading</Text>
        )
    }

    return children;
}

export default GuestOnly