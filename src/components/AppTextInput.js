import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

export const AppTextInput = ({ name, value, disable, inputType, ...res }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} style={styles.container}>
            <TextInput
                mode='outlined'
                label={name}
                value={value}
                keyboardType={inputType ? inputType : 'numeric'}
                {...res}
                returnKeyType='done'
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
})