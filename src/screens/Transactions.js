import react, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { AppButton } from '../components/AppButton'
import { useSelector } from 'react-redux'
import moment from 'moment'

export const Transactions = ({ navigation }) => {
    const [transactions, setTransactions] = useState([])
    const Alltransactions = useSelector(store => store.RootReducer.transaction)

    useEffect(() => {
        setTransactions(Alltransactions)
    })

    const TransactionList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    navigation.navigate('Add transaction', {
                        editData: item
                    })
                }}
            >
                <Text>{item.Income ? "Income" : "Expense"}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 50 }}>{item.amount} </Text>
                        <Text style={{ fontSize: 25, color: "black" }} >{item.category} </Text>
                    </View>
                    <View style={{ justifyContent: "flex-end" }} >
                        <Text style={{ fontSize: 25 }} >{moment(item.date).format('DD-MM-YYYY')} </Text>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    return (
        <View style={{ margin: 20, flex: 1 }}>
            <AppButton ButtonName={'+ Add transaction'} onPress={() => navigation.navigate('Add transaction')} />
            <FlatList
                data={transactions}
                renderItem={({ item }) => {
                    return (
                        <TransactionList item={item} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10, borderRadius: 16,
        borderWidth: 1, borderBottomColor: "black",
        padding: 10
    },
    IncomeText: {
        margin: 10
    }
})