/* eslint-disable prettier/prettier */
import React from "react";
import {Slot} from 'expo-router'
import { View } from "react-native";

export default function Layout() {
    return (
        <View className="flex-1 bg-white items-center justify-center">
            <Slot />
        </View>
    );
}
