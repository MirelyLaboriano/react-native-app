/* eslint-disable prettier/prettier */
import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
    return (
        <ScrollView>
            <Link href="/" className="text-blue-500 text-3xl mt-24">Ir al inicio</Link>
            <Text className="text-white font-bold mb-8 text-2xl">
                Sobre el proyecto
            </Text>
            <Text className="text-white text-white/90 mb-4">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
            </Text>
            <Text className="text-white text-white/90 mb-4">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
            </Text>
            <Text className="text-white text-white/90 mb-4">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
            </Text>
            <Text className="text-white text-white/90 mb-4">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
            </Text>
            <Text className="text-white text-white/90 mb-4">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
            </Text>
        </ScrollView>
    );
}
