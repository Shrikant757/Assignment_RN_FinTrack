import { StyleSheet, Text, View } from "react-native"

export const BalanceCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text>{item.label} </Text>
            <Text>{item.amount} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: "row"
    }
})