import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SignIn, SignUp, Splashscreen, Beranda, DataDunia, DataProvinsi, DetailDataDunia, DetailDataProvinsi, Profil } from '../pages';
import { BottomTab } from '../components';

const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={(props) => <BottomTab {...props}/>}>
            <Tab.Screen name="Beranda" component={Beranda} options={{headerShown: false}}/>
            <Tab.Screen name="Dunia" component={DataDunia} options={{headerShown: false}}/>
            <Tab.Screen name="Provinsi" component={DataProvinsi} options={{headerShown: false}}/>
            <Tab.Screen name="Profil" component={Profil} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

const Routers = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dunia">
                <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}}/>
                <Stack.Screen name="Signin" component={SignIn} options={{headerShown: false}}/>
                <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
                <Stack.Screen name="DetailDataDunia" component={DetailDataDunia} options={{headerShown: false}}/>
                <Stack.Screen name="DetailDataProvinsi" component={DetailDataProvinsi} options={{headerShown: false}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routers;
