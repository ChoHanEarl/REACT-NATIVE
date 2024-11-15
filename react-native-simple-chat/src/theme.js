import { ImageBackground } from "react-native"

const colors = {
    white: '#ffffff',
    black: '#000000',
    gray_0: '#d5d5d5',
    gray_1: '#a6a6a6',
    red: '#e84118',
    blue: '#3679fe'
}

export const theme = {
    background: colors.white,
    text: colors.black,
    errorText : colors.red,

    //ImageComponent
    imageBackground: colors.gray_0,
    imageButtonBackground: colors.gray_1,
    imageButtonIcon : colors.white,

    //InputComponent
    label : colors.gray_1,
    inputPlaceholder : colors.gray_1,
    inputBorder : colors.gray_1,
    inputDisabledBackground: colors.gray_0,
    
    //ButtonComponent
    buttonBackground : colors.blue,
    buttonTitle : colors.white,
    buttonUnfilledTitle : colors.blue,
    buttonLogout: colors.red,

    //Navigation
    headerTintColor : colors.black,
    tabActiveColor: colors.blue,
    tabInactiveColor: colors.gray_1,

    //SpinnerComponent
    spinnerBackground : colors.black,
    spinnerIndicator : colors.white,
}