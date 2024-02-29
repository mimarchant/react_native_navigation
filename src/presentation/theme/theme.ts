import {StyleSheet} from 'react-native'


export const colors = {
    primary: "#7037EB",
    secondary: "#F72585",
    tertiary: "#3A0CA3",
    success: "#4CC9F0",
    warning: "#FFBA08",
    danger: "#FF0B5B",
    light: "#EAE2B7",
    dark: "#03071E",

    white: "#FFFFFF",

}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
    },
})