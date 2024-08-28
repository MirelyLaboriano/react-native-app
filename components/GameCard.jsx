/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Animated } from "react-native";
import { Score } from "./score";

function GameCard({ game }) {
    return (
        <View
            className="flex-row bg-slate-900 p-4 rounded-xl   mb-4"
            key={game.slug}
        >
            <Image source={{ uri: game.image }} style={styles.image} />
            <View>
                <Text className="mb-1" style={styles.title}>{game.title}</Text>
                <Score score={game.score} maxScore={100} />
                <Text className="mt-2 flex-shrink-0" style={styles.description}>{game.description.slice(0,100)}</Text>
            </View>
        </View>
    );
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);
    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 42,
    },
    image: {
        width: 107,
        height: 107,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: "#eee",
    },
    score: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        marginBottom: 10,
    },
});

export default GameCard;
