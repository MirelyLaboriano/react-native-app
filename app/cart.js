/* eslint-disable prettier/prettier */
import { FlatList, Text } from "react-native";
import { getFeaturedPrendas } from "../lib/metacritic";
import { useEffect, useState } from "react";
import PrendaCart from "../components/PrendaCart";
import { View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export default function About() {
    // obteniendo productos destacados
    const [prendas, setPrendas] = useState([]);

    useEffect(() => {
        getFeaturedPrendas().then((prendas) => {
            setPrendas(prendas);
        });
    }, []);
    return (
        <>
            <FlatList
                data={prendas}
                keyExtractor={(prenda) => prenda.id}
                renderItem={({ item }) => <PrendaCart {...item} />}
            />
            <View className="bg-white my-2 ">
                <View className="flex flex-row items-center justify-center mx-auto w-[80%] rounded-xl bg-gray-300 py-2 my-1 ">
                    <Text className=" text-black   font-bold mx-2">
                        Comprar Ahora
                    </Text>
                    <FontAwesome6 name="whatsapp" size={24} color="black" />
                </View>
            </View>
        </>
    );
}
