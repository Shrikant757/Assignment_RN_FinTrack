import { View } from "react-native"
import { AppButton } from "../components/AppButton"

export const Home = ({ navigation }) => {
    return (
        <View>
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