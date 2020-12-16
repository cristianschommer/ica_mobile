import React from 'react';
import {useState,useEffect} from 'react';
import { 
    RefreshControl, 
    Button, 
    StatusBar,
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    TouchableOpacity, 
    FlatList
} from 'react-native';
import { ViewTopo } from '../Index/Index';
import StiloProdutos from './Styles';
import { FontAwesome } from '@expo/vector-icons';
import { cor_padrao_ica } from '../Login/Css';


const Produtos = ({ route, navigation })  => {
    return (
        <SafeAreaView style={StiloProdutos.container}>
            <StatusBar backgroundColor={cor_padrao_ica}></StatusBar>

            <ViewTopo dados_veiculo={route.params}/>
            
            <Text style={StiloProdutos.text_grupo}>{route.params.grupo_nome}</Text>

            {/* <View style={{width: "100%", height: 0.5, opacity: 0.5, backgroundColor: "#fff"}}/> */}
            <FlatList>
                
            </FlatList>
        </SafeAreaView>
    ) 
};
  

export default Produtos;