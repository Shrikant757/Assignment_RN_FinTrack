import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const AppButton = ({ onPress, ButtonName, disable }) => {
    return (
        <Button
            mode='outlined'
            buttonColor='blue'
            textColor='white'
            style={styles.loginButton}
            onPress={onPress}
            disabled={disable ? disable : false}
        >
            {ButtonName}
        </Button>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        marginTop: 8
    }
})