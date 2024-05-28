import { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const Splash = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('Login')
    }, [])

    return (
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>FinTrack</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
    }
})