import react, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import { AppButton } from '../components/AppButton'
import { AddTransactions } from '../components/AddTransaction'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

export const Transactions = () => {
    const navigation = useNavigation()
    const [transactions, setTransactions] = useState([])
    const [openAddTransactionForm, setOpenAddTransactionForm] = useState(false)
    const [editData, setEditData] = useState(null)
    const Alltransactions = useSelector(store => store.RootReducer.transaction)

    useEffect(() => {
        console.log(`---------Alltransactions =  `, Alltransactions)
        setTransactions(Alltransactions)
    })
    const TransactionList = ({ item }) => {
        return (
            <TouchableOpacity style={{
                margin: 20, borderRadius: 16,
                borderWidth: 1, borderBottomColor: "black",
            }} onPress={() => { setOpenAddTransactionForm(true); setEditData(item) }}>
                {item.Income && <Text>Income</Text>}
                <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between" }}>
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
        <View>
            {
                openAddTransactionForm &&
                <AddTransactions open={openAddTransactionForm} editData={editData} onDismiss={() => { setOpenAddTransactionForm(false); setEditData(null) }} />
            }
            <AppButton ButtonName={'+ Add transaction'} onPress={() => setOpenAddTransactionForm(true)} />
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