import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from '../screens/Splash';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Transactions } from '../screens/Transactions';
import { Balance } from '../screens/Balance';

export const RootStack = () => {
    const App = createStackNavigator();
    return (
        <NavigationContainer>
            <App.Navigator>
                <App.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <App.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <App.Screen name='Home' component={Home} />
                <App.Screen name='Transactions' component={Transactions} />
                <App.Screen name='Balance' component={Balance} />
            </App.Navigator>
        </NavigationContainer>
    )
}