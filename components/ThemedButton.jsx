import {Pressable, StyleSheet, Text} from "react-native";
import {Colors} from "../constants/Color";

function ThemedButton({style, ...props}) {
    return (
        <Pressable
            style={({pressed})=>[styles.btn, pressed && styles.pressed, style]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    }
})

export default ThemedButton;