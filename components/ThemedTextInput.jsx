import {TextInput, ColorSchemeName, useColorScheme} from "react-native";
import {useTheme} from "expo-router";
import {Colors} from "../constants/Color";

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6,
                },
                style
            ]}
            {...props}
            />
    )
}
export default ThemedTextInput
