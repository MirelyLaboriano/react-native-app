/* eslint-disable prettier/prettier */
import React from "react";
import {View, Image, Text} from "react-native"

function CategoriaMostrar({categoria}) {
    return (
        <>
            <View
                key={categoria.id}
                className="w-[40%] flex items-center justify-center"
            >
                <Image
                    source={{ uri: categoria.imagen }}
                    // resizeMode="contain"
                    width={150}
                    height={200}
                    className="rounded-lg my-1"
                />
                <Text
                    className="absolute py-2 text-sm font-bold text-center  text-white bottom-5 bg-[#2b2b2b] "
                    width={150}
                >
                    {categoria.titulo.toUpperCase()}
                </Text>
            </View>
        </>
    );
}

export default CategoriaMostrar;
