/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getCategorias, getFeaturedPrendas } from "../lib/metacritic"; // Ajusta la ruta según tu estructura
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView } from "react-native";
import { Modal } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import LottieView from "lottie-react-native";

export default function Main() {
    // Cerrar modal
    const [cerrar, setCerrar] = useState(true);
    // Obteniendo Categorias
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        getCategorias().then((categorias) => {
            setCategorias(categorias);
        });
    }, []);
    // obteniendo productos destacados
    const [prendas, setPrendas] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getFeaturedPrendas().then((prendas) => {
            setPrendas(prendas);
        });
    }, []);

    return (
        <View
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
            className="w-full h-full"
        >
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
            {/* CONSUMIR API  Y MOSTRAR POP-UP  */}
            {prendas.length === 0 ? (
                <Text>Cargando...</Text>
            ) : (
                <ScrollView>
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
                                <LottieView source={require('./../assets/confetti.json')} style={{width:400, height:500}} autoPlay lopp className="absolute"/>
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
                                <Text className="text-3xl font-bold text-[#0f3b08] italic">¡Bienvenido a Nuestra</Text>
                                <Text className="text-3xl font-bold text-[#0f3b08] italic">Familia!</Text>
                            </View>
                        </View>
                    </Modal>
                    <View className="flex-row p-3">
                        <Text className="text-xl font-bold">Super</Text>
                        <Text className="text-red-700 text-xl font-bold">
                            Ofertas
                        </Text>
                    </View>
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mx-2"
                        >
                            {prendas.map((prenda) => (
                                <View
                                    key={prenda.id}
                                    className="flex  items-center justify-center border p-1 m-1 rounded-md "
                                >
                                    <Image
                                        source={{ uri: prenda.imagen }}
                                        resizeMode="contain"
                                        width={200}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                    <Text className="text-sm py-1 font-bold">
                                        {prenda.titulo.toUpperCase()}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <Text className="p-3 font-bold text-black text-xl">
                        Productos Destacados
                    </Text>
                    <View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mx-2"
                        >
                            {/* {prendas.map((prenda) => ( */}
                            {prendas
                                .slice()
                                .reverse()
                                .map((prenda) => (
                                    <View
                                        key={prenda.id}
                                        className="flex items-center justify-center border p-1 m-1 rounded-md "
                                    >
                                        <Image
                                            source={{ uri: prenda.imagen }}
                                            resizeMode="contain"
                                            width={200}
                                            height={200}
                                            className="rounded-lg "
                                        />
                                        <Text className="text-sm py-1 font-bold">
                                            {prenda.titulo.toUpperCase()}
                                        </Text>
                                    </View>
                                ))}
                        </ScrollView>
                    </View>
                    {/* Categorías */}
                    <Text className="p-3 font-bold text-black text-xl">
                        Elige tu categoría Favorita
                    </Text>

                    <View className="flex flex-wrap flex-row justify-center items-center gap-3">
                        {categorias.map((categoria) => (
                            <View
                                key={categoria.id}
                                className="w-[40%] flex items-center justify-center"
                            >
                                <Image
                                    source={{ uri: categoria.imagen }}
                                    // resizeMode="contain"
                                    width={150}
                                    height={200}
                                    className="rounded-lg "
                                />
                                <Text
                                    className="absolute py-2 text-sm font-bold text-center  text-white bottom-5 bg-[#2b2b2b] "
                                    width={150}
                                >
                                    {categoria.titulo.toUpperCase()}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}

            <View className="text-2xl flex-row justify-between p-5 px-8 bg-[#efe6ec]">
                <View className="flex-col items-center justify-center">
                    <MaterialCommunityIcons
                        name="store-settings"
                        size={34}
                        color="blue"
                    />
                </View>
                <View className="flex-col items-center justify-center">
                    <Octicons name="search" size={30} color="blue" />
                </View>
                <View className="flex-col items-center justify-center">
                    <FontAwesome6 name="fire" size={38} color="red" />
                </View>
                <View className="flex-col items-center justify-center">
                    <FontAwesome5 name="shopping-cart" size={30} color="blue" />
                </View>
                <View className="flex-col items-center justify-center">
                    <Ionicons name="person-sharp" size={30} color="blue" />
                </View>
            </View>
        </View>
    );
}
