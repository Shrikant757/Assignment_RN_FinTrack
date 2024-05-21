import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import users from '../constants/users.json'
import { AppButton } from '../components/AppButton'
import { AppTextInput } from '../components/AppTextInput'
import { Number } from '../constants/Validator'

export const Login = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('7045031438')
    const [loading, setLoading] = useState('Login')
    const authenticate = () => {
        setLoading(true)
        const isAuthorizedUser = users.find(el => el.mobileNumber == mobileNumber)

        if (isAuthorizedUser.mobileNumber == mobileNumber) {
            setLoading(false)
            navigation.navigate('Home')
        }
    }

    const validateInput = (text) => {
        if (Number(text)) {
            setMobileNumber(text)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <AppTextInput
                name='Mobile Number'
                value={mobileNumber}
                onChangeText={(text) => validateInput(text)}
                maxLength={10}
            />
            <AppButton
                onPress={authenticate}
                ButtonName={'Login'}
                disable={mobileNumber.length < 10}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 50
    },
    loginButton: {
        marginTop: 8
    }
})