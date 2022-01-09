// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import TampilanAwal from './src/componets/TampilanAwal'
import Login from './src/componets/Login'
import Register from './src/componets/Register'
import LupaPass from './src/componets/LupaPass'
import HomeHutang from './src/componets/HomeHutang'
import HomePiutang from './src/componets/HomePiutang'
import HomeRiwayat from './src/componets/HomeRiwayat'
import DetailHutang from './src/componets/DetailHutang'
import DetailPiutang from './src/componets/DetailPiutang'
import DetailRiwayat from './src/componets/DetailRiwayat'
import ContentDrawer from './src/componets/contentDrawer'

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


function Home() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#426064',
      activeBackgroundColor: '#c4461c',
      inactiveBackgroundColor: '#b55031',
      style: {
        backgroundColor: '#51C9FA',
        paddingBottom: 3
      }
    }}>
      <Tab.Screen name="Hutang" component={HomeHutang} />
      <Tab.Screen name="Piutang" component={HomePiutang} />
      <Tab.Screen name="Riwayat" component={HomeRiwayat} />
    </Tab.Navigator>
  )
}

function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabStack" component={Home} />
      <Stack.Screen name="DetailHutang" component={DetailHutang} />
      <Stack.Screen name="DetailPiutang" component={DetailPiutang} />
      <Stack.Screen name="DetailRiwayat" component={DetailRiwayat} />
    </Stack.Navigator>
  )
}

function TabStackDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props)=> <ContentDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={StackHome} />
    </Drawer.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="TampilanAwal" component={TampilanAwal} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPass" component={LupaPass} />
        <Stack.Screen name="Home" component={TabStackDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;