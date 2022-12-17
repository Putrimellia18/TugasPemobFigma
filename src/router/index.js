import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../page/HomePage';
import Splash from '../page/Splash';
import ThumbnailList from '../page/Destinasi/thumbnaillist';
import ListBerita from '../page/Informasi/listberita';
import Lainnya from '../page/Lainnya/Lainnya';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () =>{
  return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name='Beranda' component={HomePage} options={{headerShown:false}}></Tab.Screen>
      <Tab.Screen name='Destinasi' component={ThumbnailList} options={{headerShown:false}}></Tab.Screen>
      <Tab.Screen name='Informasi' component={ListBerita} options={{headerShown:false}}></Tab.Screen>
      <Tab.Screen name='Lainnya' component={Lainnya} options={{headerShown:false}}></Tab.Screen>
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}
const Berita = () =>{
  return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name='Destinasi' component={ThumbnailList} options={{headerShown:false}}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default Router

const styles = StyleSheet.create({})