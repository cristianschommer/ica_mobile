import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    KeyboardAvoidingView, 
    Alert, 
    TouchableOpacity, 
    Text, 
    View, 
    Image,
    SafeAreaView, 
    ScrollView, 
    TextInput,
    Switch
} from 'react-native';
import {Platform} from 'react-native';

import StiloLogin, { cor_padrao_ica } from './Css';
import {
    url_request,
    mensagem_erro_request
} from '../../App';
import { TextInputMask } from 'react-native-masked-text';
import StiloVeiculo from '../Veiculo/Css';


const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0



const Login = ({ navigation })  => {
    
    const [veiculo, setVeiculo]=useState('');
    const [senha, setSenha]=useState(''); 
    const [salvar_senha, setSalvarSenha] = useState(false);
    const toggleSwitch = () => setSalvarSenha(previousState => !previousState);
    
    useEffect(()=>{
        async function getUltimoVeiculo()
        {

                try {
                    const value = await AsyncStorage.getItem('ultimo_veiculo');
                    if (value !== null) {
                        setVeiculo(value);
                    }
                    
                    const senha = await AsyncStorage.getItem('ultima_senha');
                    if (senha) {
                        setSenha(senha);
                        setSalvarSenha(true);
                    }
                    else {
                        setSenha(null);
                        setSalvarSenha(false);
                    }
                } catch (error) {
                }
        }
        getUltimoVeiculo();
    },[]);
    

    function Entrar() {
        if (! veiculo) {
             Alert.alert("Informe o veículo.");
        }
        else if (! senha) {
            Alert.alert("Informe a senha.");
        }
        else {

            let _salva_ultimo_veiculo = async () => {
                try {
                await AsyncStorage.setItem(
                    'ultimo_veiculo',
                    veiculo,
                );
                    //console.log(salvar_senha);
                if (salvar_senha) {
                    await AsyncStorage.setItem(
                        'ultima_senha',
                        senha,
                    );                    
                } else {
                    await AsyncStorage.setItem(
                        'ultima_senha',
                        '',
                    );                    
                }
                //console.log("sakvi")
                } catch (error) {
                // Error saving data
                    console.log(error)
                }
            };

            _salva_ultimo_veiculo();

            let url = url_request + '/veiculo/api/login_mobile?';
            url += 'placa=' + veiculo;
            url += '&senha=' + senha; 
            fetch(url, {
             method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson['status'] === "OK") {   
                    navigation.navigate('Veiculo',  {
                        'placa': veiculo, 
                        'senha': senha,
                        'modelo': responseJson['modelo'], 
                        'ano': responseJson['ano']});
                }
                else 
                    Alert.alert(responseJson['mensagem']);
                //console.log(responseJson);        
            })
            .catch((error) => {
                Alert.alert(mensagem_erro_request);
            });   

            //
        }
                     
    } 
    return (
        <SafeAreaView style={StiloLogin.container}>
            <ScrollView style={StiloLogin.scrool} showsVerticalScrollIndicator={false}>
                <View style={StiloLogin.view_imagem}>
                    <Image 
                        source={require('../../assets/logo_ica.png')} 
                        style={StiloLogin.logo_ica_login} />
                </View>

                <View>
                    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                        <View style={StiloLogin.view_login}>
                            <Image 
                                style={StiloLogin.imagem_input}
                                source={require('../../assets/login_carro.png')} 
                            />
                            <TextInputMask 
                                autoCapitalize="characters" 
                                placeholder="Veículo" 
                                style={StiloLogin.input}
                                defaultValue={veiculo}
                                onChangeText={text => setVeiculo(text.toUpperCase())}
                                value={veiculo}
                                type={'custom'}
                                options={{
                                    /**
                                     * mask: (String | required | default '')
                                     * the mask pattern
                                     * 9 - accept digit.
                                     * A - accept alpha.
                                     * S - accept alphanumeric.
                                     * * - accept all, EXCEPT white space.
                                    */
                                    mask: 'AAA-9S99'
                                    }}
                            />
                        </View>

                        <View style={StiloLogin.view_login}>
                            <Image 
                                style={StiloLogin.imagem_input}
                                source={require('../../assets/login_cadeado.png')} 
                            />
                            <TextInput 
                                placeholder="Senha" 
                                secureTextEntry={true} 
                                style={StiloLogin.input}
                                value={senha}
                                onChangeText={text => setSenha(text)}
                            />
                        </View>

                        <View style={[StiloLogin.view_login, {padding: 15}]}>
                            <Text style={[StiloLogin.text, {width: "85%", fontWeight: "bold"}]}>Salvar senha</Text>
                            <Switch
                                trackColor={{ false: "#ddd", true: "#ddd"}}
                                thumbColor={salvar_senha ? cor_padrao_ica : cor_padrao_ica}
                                ios_backgroundColor="white"
                                onValueChange={toggleSwitch}
                                value={salvar_senha}
                            />                            
                        </View>
                        
                        <View style={StiloLogin.view_botao_entrar}>
                            <TouchableOpacity onPress={() => Entrar()} style={StiloLogin.botao_entrar}>
                                <Text style={StiloLogin.text_botao_entrar}>ENTRAR</Text>
                            </TouchableOpacity>
                        </View>  
                    </KeyboardAvoidingView>
                </View> 
            </ScrollView>
        </SafeAreaView>

    ) 
};
  

export default Login;