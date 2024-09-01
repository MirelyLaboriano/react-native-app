/* eslint-disable prettier/prettier */
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import LottieView from "lottie-react-native";
import { View, Image, Text } from "react-native";
import { Modal } from "react-native";
import { useState } from "react";
function ModalMostrar() {
    // Cerrar modal
    const [cerrar, setCerrar] = useState(true);
    return (
        <Modal animationType="slide" visible={cerrar} transparent>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    className="rounded-md w-full h-full"
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fffffff2",
                    }}
                >
                    <LottieView
                        source={require("./../assets/confetti.json")}
                        style={{ width: 400, height: 500 }}
                        autoPlay
                        lopp
                        className="absolute"
                    />
                    <View className="flex-row w-full justify-end items-end px-5">
                        <AntDesign
                            name="closecircle"
                            size={30}
                            color="black"
                            onPress={() => setCerrar(false)}
                        />
                    </View>

                    <Image
                        className="flex items-center justify-center"
                        source={{
                            uri: "https://i.ibb.co/6Jnyn8c/repartidor-app-m-vil.png",
                        }}
                        style={{ width: 300, height: 300 }}
                        resizeMode="contain"
                    />
                    <Text className="text-3xl font-bold text-[#0f3b08] italic">
                        ¡Bienvenido a Nuestra
                    </Text>
                    <Text className="text-3xl font-bold text-[#0f3b08] italic">
                        Familia!
                    </Text>
                </View>
            </View>
        </Modal>
    );
}

export default ModalMostrar;
