import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { BalanceCard } from "../components/BalanceCard"

export const Balance = () => {
    const allTransactions = useSelector(store => store.RootReducer.transaction)
    const [items, setItems] = useState([])
    const [balance, setBalance] = useState()
    const getIncomeExpenseBalance = () => {
        const getAllIncomes = allTransactions.filter(el => el.Income == true)
        const getAllExpense = allTransactions.filter(el => el.Income == false)
        let income = 0;
        let expense = 0;
        if (getAllIncomes.length > 0) {
            income = getAllIncomes.map(el => parseInt(el.amount)).reduce((accumulator, currentValue) =>
                accumulator + currentValue)
        }
        if (getAllExpense.length > 0) {
            income = getAllExpense.map(el => parseInt(el.amount)).reduce((accumulator, currentValue) =>
                accumulator + currentValue)
        }
        const Balance = income - expense
        setBalance(Balance)
        setItems([
            {
                'label': 'Income',
                'amount': income
            },
            {
                'label': 'Expense',
                'amount': expense
            },
        ])
    }
    useEffect(() => {
        getIncomeExpenseBalance()
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => <BalanceCard item={item} />}
            />
            <Text>Balance:  {balance}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    }
})