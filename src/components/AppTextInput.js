import { KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput } from 'react-native-paper'

export const AppTextInput = ({ name, value, disable, inputType, ...res }) => {
    return (
        <KeyboardAvoidingView>
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
