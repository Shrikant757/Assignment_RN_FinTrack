import { useState } from "react"
import { useDispatch } from "react-redux";
import { KeyboardAvoidingView, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AppTextInput } from "./AppTextInput"
import { Category } from "./Category"
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppButton } from "./AppButton";
import { Alltransactions } from "../Store/Reducers/TransactionSlice";
import { Switch } from "react-native-paper";

export const AddTransactions = ({ open, onDismiss, editData }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(editData ? editData.amount : '')
    const [selectedCategory, setSelectedCategory] = useState(editData ? editData.category : '')
    const [date, setDate] = useState(editData ? editData.date : null)
    const [datePicker, setDatePicker] = useState(new Date());
    const [OpenDatePicker, setOpenDatePicker] = useState(false)
    const [isIncome, setIsIncome] = useState(editData ? editData.Income : false);

    const onPressCategory = (data) => {
        setSelectedCategory(data)
    }
    const onChangeDate = (event, selectedDate) => {
        if (event.type == 'set') {
            setDatePicker(selectedDate)
            setDate(selectedDate)
            setOpenDatePicker(false)
        }
    }
    const onPressAdit = () => {
        const addTransactionInStore = {
            "Income": isIncome,
            "amount": amount,
            "category": selectedCategory,
            "date": date.toDateString()
        }
        dispatch(Alltransactions(addTransactionInStore))
        setAmount('')
        setDate()
        setSelectedCategory('')
        setIsIncome(false)
        onDismiss()
    }
    const onToggleSwitch = () => setIsIncome(!isIncome);

    return (

        <Modal visible={open} animationType="fade"
            transparent={true}
        >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={{ textAlign: "right" }} onPress={onDismiss}>cancel</Text>
                    <Text style={styles.title}>Transaction</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Income</Text>
                        <Switch value={isIncome} onValueChange={onToggleSwitch} />
                    </View>
                    <AppTextInput name={'amount'} value={amount} onChangeText={text => setAmount(text)} />
                    <Category onSelected={onPressCategory} />
                    <TouchableOpacity onPress={() => setOpenDatePicker(true)} style={{ paddingTop: 15, }}>
                        <View pointerEvents="none">
                            <AppTextInput
                                name='select date'
                                value={date ? new Date(date).toDateString() : null}
                            />
                        </View>
                    </TouchableOpacity>
                    {OpenDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={datePicker}
                            mode={"date"}
                            dateFormat="day month year"
                            display="default"
                            onChange={onChangeDate}
                            style={{ paddingRight: 100 }}
                        />
                    )}
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