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
import StiloVeiculo from './Css';
import {url_request,mensagem_erro_request} from '../../App';
import StiloLogin, { cor_padrao_ica } from '../Login/Css';
import Progress from '../Progress/Progress';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
const Item = ({ json_produto, navigation }) => (
    <TouchableOpacity 
        style={[StiloVeiculo.view_grupo, {backgroundColor: json_produto.cor}]}
        onPress={()=>{                    
            navigation.navigate('Produtos', {grupo: json_produto.nome}) 
        }}
    >
        <Image
            source={{uri: json_produto.imagem}}
            style={StiloVeiculo.imagem_grupo}
            
        />

        <Text style={StiloVeiculo.texto_grupo} >{json_produto.nome}</Text>
    </TouchableOpacity>
  );

const Veiculo = ({ route, navigation })  => {
    const [grupos, setGrupos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [dados_veiculo, setDadosVeiculo] = useState([])
    const [show_progress, setShowProgress] = useState(false);

    function get_informacao_veiculo() {
        setShowProgress(true);
        let url = url_request + '/revisao/api/lista_revisao?';
        url += 'placa=' + route.params.placa
        url += '&senha=' + route.params.senha
        fetch(url, {
         method: 'GET'
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
        <SafeAreaView style={StiloVeiculo.container}>
            {/* {show_progress &&
            <View> 
                <Progress></Progress>
            </View>
            } */}
            
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

            <View style={StiloVeiculo.view_rodape}>
                <View style={StiloVeiculo.view_botoes_rodape}> 
                    <TouchableOpacity onPress={()=>{}}>
                        <Image 
                            style={StiloVeiculo.imagem_rodape}
                            source={require('../../assets/odometro.png')} 
                        />  
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    ) 
};
  

export default Veiculo;