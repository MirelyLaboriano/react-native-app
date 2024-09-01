/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";


function PrendaCart({ titulo, descripcion, precio, precioAntes, imagen }) {
    const [count, setCount] = React.useState(1);

    return (
        <View className="w-[90%] bg-gray-100 rounded-lg p-2 my-5 mx-auto flex flex-col justify-center ">
            <View>
                <Image
                    source={{ uri: imagen }}
                    resizeMode="contain"
                    className="rounded-xl w-full h-48"
                />
            </View>
            <View className="flex flex-col mx-auto">
                <Text className="text-lg font-bold  py-2">
                    {titulo}
                </Text>
                <View className="flex flex-row items-center gap-3 ">
                <AntDesign name="minuscircleo" onPress={()=>setCount(prevCount => Math.max(prevCount - 1, 1))}/>
                    <Text>{count}</Text>
                <AntDesign name="pluscircleo" onPress={()=>setCount(prevCount => Math.min(prevCount + 1, 3))}/>
                </View>
                <Text className="text-sm ">{descripcion}</Text>
                <View className="flex flex-row justify-between items-center w-full ">
                    <Text className="font-bold line-through">Antes: S/. {precioAntes * count}</Text>
                    <Text className="font-bold text-lg text-red-600">Ahora: S/. {precio * count}</Text>
                </View>
            </View>
        </View>
    );
}

export default PrendaCart;
