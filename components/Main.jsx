/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getCategorias, getFeaturedPrendas } from "../lib/metacritic"; // Ajusta la ruta según tu estructura
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import MenuInferior from "./menuInferior";
import MenuSuperior from "./menuSuperior";
import ModalMostrar from "./modal";
import SuperOfertasMostrar from "./SuperOfertas";
import ProductosDestacadosMostrar from "./ProductosDestacados";
import CategoriaMostrar from "./Categoria";


export default function Main() {
    
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
            {/* Componente del Menú Superior */}
            <MenuSuperior />

            {/* CONSUMIR API  Y MOSTRAR POP-UP  */}
            {prendas.length === 0 ? (
                <Text>Cargando...</Text>
            ) : (
                <ScrollView>
                    {/* Mostrar pop-up */}
                    <ModalMostrar />
                    {/* SuperOfertas */}
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
                                <SuperOfertasMostrar key={prenda.id} prenda={prenda}/>
                            ))}
                        </ScrollView>
                    </View>
                    {/* Productos Destacados */}
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
                                    <ProductosDestacadosMostrar key={prenda.id} prenda={prenda}/>
                                ))}
                        </ScrollView>
                    </View>
                    {/* Categorías */}
                    <Text className="p-3 font-bold text-black text-xl">
                        Elige tu categoría Favorita
                    </Text>

                    <View className="flex flex-wrap flex-row justify-center items-center gap-3">
                        {categorias.map((categoria) => (
                            <CategoriaMostrar key={categoria.id} categoria={categoria} />
                        ))}
                    </View>
                </ScrollView>
            )}
            {/* Menú inferior de la aplicación */}
            <View className="text-2xl flex-row justify-between p-5 px-8 bg-[#efe6ec]">
                <MenuInferior />
            </View>
        </View>
    );
}
