import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './src/Login/Login';
import Veiculo from './src/Veiculo/Veiculo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const url_request = 'http://192.168.100.56:8080';
export const mensagem_erro_request = 'Ocorreu um erro de conexão.\n\nTente novamente mais tarde.';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#48887B"/>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#48887B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center",
          //headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
          }}        
        />
        <Stack.Screen 
          name="Veiculo" 
          component={Veiculo}
          options={({route}) => ({
            //headerShown: false
            //headerLeft: null,
            //gesturesEnabled: false,
            headerTitle: route.params.placa,
          })}       
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
//48887B
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48887B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
