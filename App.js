/* eslint-disable prettier/prettier */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Ya no se necesitaria luego crear la ruta app

export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Main />
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:12,
    },
});
