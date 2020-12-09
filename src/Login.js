import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView, Alert, TouchableOpacity, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import StiloLogin from './Css';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0



const Login = ({ navigation })  => {
    
        //Alert.alert("OI");
        //() => {navigation.navigate('Veiculo')}}
    const [veiculo, setVeiculo]=useState('');
    const [senha, setSenha]=useState('');  

    useEffect(()=>{
        async function getUltimoVeiculo()
        {

                try {
                    const value = await AsyncStorage.getItem('ultimo_veiculo');
                    if (value !== null) {
                        setVeiculo(value);
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
                //console.log("sakvi")
                } catch (error) {
                // Error saving data
                    console.log(error)
                }
            };

            _salva_ultimo_veiculo();
            navigation.navigate('Veiculo');
        }
        /*fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson['title']);
            
        })
        .catch((error) => {
            console.error(error);
        });   */
                     
    } 
    return (
        <SafeAreaView style={StiloLogin.container}>
            <ScrollView style={StiloLogin.scrool} showsVerticalScrollIndicator={false}>
                    <View style={StiloLogin.view_imagem}>
                        <Image 
                            source={require('../assets/logo_ica.png')} 
                            style={StiloLogin.logo_ica_login} />
                    </View>
                    <View>
                        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                            <View style={StiloLogin.view_login}>
                                <Image 
                                    style={StiloLogin.imagem_input}
                                    source={require('../assets/login_carro.png')} 
                                />
                                <TextInput 
                                    autoCapitalize="characters" 
                                    placeholder="Veículo" 
                                    style={StiloLogin.input}
                                    defaultValue={veiculo}
                                    onChangeText={text => setVeiculo(text)}
                                />
                            </View>
                            <View style={StiloLogin.view_login}>
                                <Image 
                                    style={StiloLogin.imagem_input}
                                    source={require('../assets/login_cadeado.png')} 
                                />
                                <TextInput 
                                    placeholder="Senha" 
                                    secureTextEntry={true} 
                                    style={StiloLogin.input}
                                    onChangeText={text => setSenha(text)}
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