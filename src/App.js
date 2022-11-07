import {StyleSheet, View} from 'react-native';
import {useState} from "react";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import RegistrationScreen from "./components/Screens/RegistrationScreen";
import LogInScreen from "./components/Screens/LogInScreen";

const fontsLoading = async () => {
    try {
    await Font.loadAsync({
        "RReg": require('../assets/fonts/Roboto-Regular.ttf'),
        "RMed": require('../assets/fonts/Roboto-Medium.ttf'),
        "RBold": require('../assets/fonts/Roboto-Bold.ttf'),
    })
    } catch (error) {
        console.error(error.message);
    }
}

export default function App() {
    const [fontState, setFontState] = useState(false);

    if (!fontState) {
        return (<AppLoading
            startAsync={fontsLoading}
            onFinish={() => setFontState(true)}
            onError={console.warn}
        />)
    }

    return (
        <View style={styles.container}>
            <RegistrationScreen/>
            {/*<LogInScreen/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

