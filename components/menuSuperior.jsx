/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function MenuSuperior() {
    return (
        <>
            <View className="flex flex-row justify-between p-3 ">
                <View className="flex-row">
                    <Text className="text-[#26BCA1] text-3xl font-bold">A</Text>
                    <Text className="text-[#041660] text-3xl font-bold">
                        ri Sports
                    </Text>
                </View>
                <Ionicons name="notifications" size={30} color="blue" />
            </View>
            <View className="text-2xl flex-row justify-between p-5 px-8 bg-[#efe6ec]">
                <View className="flex-col items-center justify-center">
                    <MaterialIcons name="groups-2" size={24} color="black" />
                    <Text className="text-lg">Todos</Text>
                </View>
                <View className="flex-col items-center justify-center">
                    <Ionicons name="person-sharp" size={24} color="black" />
                    <Text className="text-lg">Caballeros</Text>
                </View>
                <View className="flex-col items-center justify-center">
                    <MaterialIcons name="child-care" size={24} color="black" />
                    <Text className="text-lg">Niños</Text>
                </View>
            </View>
        </>
    );
}

export default MenuSuperior;
