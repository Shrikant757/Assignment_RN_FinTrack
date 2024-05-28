import { StyleSheet, View } from "react-native"
import { AppButton } from "../components/AppButton"

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppButton
                ButtonName={'Transactions'}
                onPress={() => navigation.navigate('Transactions')}
            />
            <AppButton
                ButtonName={'Balance'}
                onPress={() => navigation.navigate('Balance')}
            />
        </View>
    )
}

const styles = StyleSheet.create(({
    container: {
        margin: 20
    }
}))