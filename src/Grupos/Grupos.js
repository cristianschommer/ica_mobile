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
import StiloGrupos from './Styles';
import Produtos from '../Produto/Produtos';
import {url_request,mensagem_erro_request} from '../../App';
import StiloLogin, { cor_padrao_ica } from '../Login/Css';
import {ViewTopo} from '../Index/Index';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { encode } from 'base-64';


const Grupos = ({ route, navigation })  => {
    const Item = ({ json_produto, navigation }) => (
        <TouchableOpacity 
            style={[StiloGrupos.view_grupo, {backgroundColor: json_produto.cor}]}
            onPress={()=>{                 
                navigation.navigate('Produtos', {'grupo_nome': json_produto.nome}) 
            }}
        >
            <Image
                source={{uri: json_produto.imagem}}
                style={StiloGrupos.imagem_grupo}
                
            />
    
            <Text style={StiloGrupos.texto_grupo} >{json_produto.nome}</Text>
        </TouchableOpacity>
    );

    const [grupos, setGrupos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [dados_veiculo, setDadosVeiculo] = useState([])
    const [show_progress, setShowProgress] = useState(false);

    function get_informacao_veiculo() {
        let url = url_request + '/revisao/api/lista_revisao/';

        fetch(url, {
         method: 'GET',
         headers: new Headers({
            'Authorization': 'Basic ' + encode(route.params.placa + ":" + route.params.senha),
            'Content-Type': 'application/json'
          }), 
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setShowProgress(false);
            setGrupos(responseJson['grupos']);
            setProdutos(responseJson['produtos'])
            setDadosVeiculo(responseJson['dados_veiculo'])
        })
        .catch((error) => {
            setShowProgress(false);
            
            Alert.alert(mensagem_erro_request);
            //setGrupos([]);
            //setProdutos([]);
        }); 
    }

    useEffect(() => {
        get_informacao_veiculo();
    }, []);

    const renderItem = ({ item }) => (
        <Item json_produto={item} navigation={navigation} />
    );

    return (
        <SafeAreaView style={StiloGrupos.container}>
            <ViewTopo 
                dados_veiculo={route}
            />
            
            <FlatList
                data={grupos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                refreshControl={
                    <RefreshControl
                        refreshing={show_progress}
                        onRefresh={() => {get_informacao_veiculo()}}
                        title="Atualizando..."
                        titleColor="white"
                        tintColor="white"
                        colors={[cor_padrao_ica]}                                                
                     />
                }
            />

        </SafeAreaView>
    ) 
};
  

export default Grupos;