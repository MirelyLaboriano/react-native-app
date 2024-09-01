/* eslint-disable prettier/prettier */
import React from "react";
import {Slot} from 'expo-router'
import { View } from "react-native";
import MenuInferior from "../components/menuInferior";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MenuSuperior from "../components/menuSuperior";

export default function Layout() {
    const insets = useSafeAreaInsets();
    return (
        // <View className="flex-1 bg-white items-center justify-center">
        <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
            className="w-full h-full"
        >
            {/* Componente del Menú Superior */}
            <MenuSuperior />
            <Slot />
            {/* Menú inferior de la aplicación */}
            <View className="text-2xl flex-row justify-between p-5 px-8 bg-[#efe6ec] w-full">
                <MenuInferior />
            </View>
        </View>
    );
}
