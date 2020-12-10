import React, {useState,useEffect} from 'react';
import { RefreshControl, Button, TouchableOpacity, Text, View, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import StiloVeiculo from './Css';
import {url_request,mensagem_erro_request} from '../../App';
import { cor_padrao_ica } from '../Login/Css';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Item = ({ json_produto }) => (
    <View style={[StiloVeiculo.view_grupo, {backgroundColor: json_produto.cor}]}
    onStartShouldSetResponder={()=>console.log("llll")}
    >
        <Text style={StiloVeiculo.texto_grupo}>{json_produto.nome}</Text>
    </View>
  );

const Veiculo = ({ route })  => {
    const [grupos, setGrupos] = useState([]);
    const [produtos, setProdutos] = useState([]);

    function get_informacao_veiculo() {

        let url = url_request + '/revisao/api/lista_revisao?';
        url += 'placa=' + "IIB-5H08";
        url += '&senha=' + "aocaoc"; 
        fetch(url, {
         method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //Alert.alert("ppp")
            setGrupos(responseJson['grupos']);
            
            //setGrupos([]);
                  
        })
        .catch((error) => {
            //Alert.alert(mensagem_erro_request);
            //setGrupos([]);
            //setProdutos([]);
        }); 
    }

    useEffect(() => {
        get_informacao_veiculo();
    }, [])

    const renderItem = ({ item }) => (
        <Item json_produto={item} />
    );

    return (
        <SafeAreaView style={StiloVeiculo.container}>
            <View
                style={{flex: 1, justifyContent: "center", alignItems: "center"}}
            >
                <Text
                    style={{fontSize: 22, color: "#fff"}}
                >EM DESENVOLVIMENTO</Text>
            </View>

        </SafeAreaView>
    ) 
};
  

export default Veiculo;