/* eslint-disable prettier/prettier */
import React from "react";
import { Image, View, Text } from "react-native";
function ProductosDestacadosMostrar({prenda}) {
    return (
        <>
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
        </>
    );
}

export default ProductosDestacadosMostrar;
