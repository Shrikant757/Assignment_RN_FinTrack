import { useState } from "react"
import { KeyboardAvoidingView, Modal, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import { AppTextInput } from "./AppTextInput"
import { Category } from "./Category"
import { AllCategories } from "../Store/Reducers/CategorySlice"
import { AppButton } from "./AppButton"

export const AddCategory = ({ open, onDismiss }) => {
    const [category, setCategory] = useState(null)
    const dispatch = useDispatch()

    const onPressAdit = () => {
        dispatch(AllCategories(category))
        setCategory(null)
    }

    return (
        <Modal visible={open} animationType="fade" transparent={true}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={{ textAlign: "right" }} onPress={onDismiss}>cancel</Text>
                    <Text style={styles.title}>Categories</Text>
                    <Category onlyShowAllCategories={true} />
                    <AppTextInput name={'Enter Category'} inputType={'default'} value={category} onChangeText={text => setCategory(text)} />
                    <AppButton ButtonName={'Add'} onPress={() => onPressAdit()} />
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(52, 52, 52, 0.67)'
    },
    formContainer: {
        justifyContent: "flex-end",
        backgroundColor: "white",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal: 16,
        paddingVertical: 30
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
})