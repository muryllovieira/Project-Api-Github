import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SearchBar } from "../../molecules/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const githubLogo = require("../../../../assets/github-mark.png");

export function Main() {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);
    const scale = useSharedValue(1);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 1000 });
        translateY.value = withTiming(0, { duration: 800 });
        scale.value = withTiming(1.1, { duration: 1000 });
    }, []);

    const animatedContainerStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    const animatedLogoStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <LinearGradient
            style={styles.container}
            colors={["#332332", "#A15EF2"]}
            end={{ x: 0.9, y: 1.7 }}
        >
            <Animated.View style={animatedContainerStyle}>
                <Text style={styles.textLabel}>
                    Olá! Aqui faço a listagem de todos os seus projetos do Github
                </Text>
                <Animated.View style={[styles.githubLogo, animatedLogoStyle]}>
                    <Image
                        source={githubLogo}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                        tintColor={"white"}
                    />
                </Animated.View>
                <Text style={styles.textLabel}>Digite abaixo o seu usuário do Github:</Text>
                <SearchBar />
            </Animated.View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: "900",
        color: "white",
        textAlign: "center",
        padding: 20,
    },
    githubLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
});
