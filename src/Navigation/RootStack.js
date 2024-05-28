import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Transactions } from '../screens/Transactions';
import { Balance } from '../screens/Balance';
import { AddTransactions } from '../screens/AddTransaction';

const App = createNativeStackNavigator();
export const RootStack = () => {
    return (
        <NavigationContainer>
            <App.Navigator screenOptions={{ animation: "fade" }}>
                <App.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <App.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <App.Screen name='Home' component={Home} />
                <App.Screen name='Transactions' component={Transactions} />
                <App.Screen name='Add transaction' component={AddTransactions} />
                <App.Screen name='Balance' component={Balance} />
            </App.Navigator>
        </NavigationContainer>
    )
}