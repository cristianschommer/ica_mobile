import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './src/Login/Login';
import Veiculo from './src/Veiculo/Veiculo';
import Produtos from './src/Produto/Produtos';
import Index from './src/Index/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cor_padrao_ica } from './src/Login/Css';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={cor_padrao_ica}/>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: cor_padrao_ica,
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
          name="Index" 
          component={Index}
          options={({route}) => ({
            headerShown: false,
            headerLeft: null,
            gesturesEnabled: false,
            headerTitle: route.params.placa + " - " + route.params.modelo,
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
