import React from 'react';
import {
    Text,
    SafeAreaView,
    StatusBar,
    View,
    Platform
} from 'react-native';
import StiloIndex from './Styles';
import { cor_padrao_ica } from '../Login/Css';
import Grupos from '../Grupos/Grupos';
import Produtos from '../Produto/Produtos';
import VeiculoKM from '../Veiculo/Veiculo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Index = ({ route, navigation })  => {
    const Tab = createBottomTabNavigator();
    return (
        
        <SafeAreaView style={StiloIndex.container}>
            <StatusBar backgroundColor={cor_padrao_ica}></StatusBar>

            <NavigationContainer independent={true} options={({route, navigation}) => {}}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'white',
                        inactiveTintColor: 'silver',
                        showLabel: false,
                        activeBackgroundColor: cor_padrao_ica,
                        inactiveBackgroundColor: cor_padrao_ica,
                    }}
                    
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                
                            switch (route.name) {
                                case 'Home':
                                    iconName = 'star';
                                    break;
                                case 'VeiculoKM':
                                    iconName = 'dashboard';
                                    break;
                                case 'Login':
                                    iconName = 'sign-in';
                                    break;
                            }
                            return <FontAwesome name={iconName} size={24} color={color} />
                        },
                    })}
                >
                        <Tab.Screen
                            name="Home" 
                            component={Grupos} 
                            initialParams={route.params}
                        />  
                        {/* <Tab.Screen
                            name="Produtos" 
                            component={Produtos} 
                            initialParams={route}
                            options={{
                                tabBarVisible: false,
                              }}
                        />  */}
                        <Tab.Screen
                            name="VeiculoKM" 
                            component={VeiculoKM} 
                            initialParams={route}
                        />                                                                               
                </Tab.Navigator>    
            </NavigationContainer>
            
        </SafeAreaView>
    )
}

export const ViewTopo = ({ navigation, dados_veiculo })  => {
    // console.log(dados_veiculo);
    return (
        <View style={StiloIndex.view_topo}>
            <Text style={StiloIndex.text_topo}>{dados_veiculo.params.placa} - {dados_veiculo.params.marca} {dados_veiculo.params.modelo} {dados_veiculo.params.ano}</Text>
            <Text style={StiloIndex.text_topo}>{dados_veiculo.params.km} KM</Text>
        </View>
    )
} 

export default Index;