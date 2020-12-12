import React from 'react';
import {useState,useEffect} from 'react';
import { 
    RefreshControl, 
    Button, 
    Alert,
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    TouchableOpacity, 
    FlatList
} from 'react-native';
import {url_request,mensagem_erro_request} from '../../App';
import { cor_padrao_ica } from '../Login/Css';
import StiloVeiculo from '../Veiculo/Css';
import StiloProdutos from './Css';


const Produtos = ({ route })  => {

    return (
        <View style={StiloVeiculo.container}>
            <Text
                style={{textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold"}}
            >
                EM DESENVOLVIMENTO
            </Text>
        </View>
    ) 
};
  

export default Produtos;