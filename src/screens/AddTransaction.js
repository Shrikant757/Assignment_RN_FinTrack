import { useState } from "react"
import { useDispatch } from "react-redux";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AppTextInput } from "../components/AppTextInput"
import { Category } from "../components/Category"
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppButton } from "../components/AppButton";
import { Alltransactions } from "../Store/Reducers/TransactionSlice";
import { Switch } from "react-native-paper";

export const AddTransactions = ({ route }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState((route.params && route.params.editData) ? route.params.editData.amount : '')
    const [selectedCategory, setSelectedCategory] = useState((route.params && route.params.editData) ? route.params.editData.category : '')
    const [date, setDate] = useState((route.params && route.params.editData) ? route.params.editData.date : null)
    const [datePicker, setDatePicker] = useState(new Date());
    const [OpenDatePicker, setOpenDatePicker] = useState(false)
    const [isIncome, setIsIncome] = useState((route.params && route.params.editData) ? route.params.editData.Income : false);

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
        setDate(null)
        setSelectedCategory('')
        setIsIncome(false)
    }
    const onToggleSwitch = () => setIsIncome(!isIncome);

    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} style={styles.container}>
            <View style={{ flexDirection: "row", alignContent: "center" }}>
                <Text style={{ paddingRight: 10 }}>Income</Text>
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    formContainer: {
        // justifyContent: "flex-end",
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