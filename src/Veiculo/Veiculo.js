import React from 'react';
import {useState,useEffect} from 'react';
import { 
    RefreshControl, 
    Button, 
    TextInput,
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    TouchableOpacity, 
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Keyboard,
    Alert
} from 'react-native';
import StiloVeiculo from './Styles';
import {
    url_request,
    mensagem_erro_request,
    _informa
} from '../Library/Library';
import StiloLogin, { cor_padrao_ica } from '../Login/Css';
import Progress from '../Progress/Progress';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { ViewTopo } from '../Index/Index';
import {keyboardVerticalOffset} from '../Library/Library';


const VeiculoKM = ({ route, navigation })  => {
    const [nova_km, SetNovaKM] = useState('');

    return (
        <SafeAreaView style={StiloVeiculo.container} onStartShouldSetResponder={() => Keyboard.dismiss()}>
            <StatusBar backgroundColor={cor_padrao_ica} />

            <ViewTopo dados_veiculo={route.params}/>
            {/* <View style={{marginTop: 20}}>
                <Image 
                    source={require('../../assets/odometro.png')} 
                    style={{alignSelf: "center", width: 40, height: 40}} 
                />                        
            </View>                   */}
            <View style={StiloVeiculo.view_central}>
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                    <Text style={StiloVeiculo.text_central}>Informar KM atual</Text>
                    <View style={StiloVeiculo.view_km}>
                        <TextInput 
                            selectionColor="#ddd"
                            maxLength={6}
                            tintColor="#fff"
                            keyboardType='numeric'
                            style={StiloVeiculo.text_input_km}
                            value={nova_km}
                            onKeyPress={text => SetNovaKM(text)}
                        />
                           
                    </View>
                    <View style={StiloVeiculo.view_salvar_km}>
                        <TouchableOpacity onPress={()=>{_informa("Em desenvolvimento.")}}>
                            <Text style={StiloVeiculo.text_km}>Salvar</Text>
                        </TouchableOpacity>
                    </View>  
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    ) 
};
  

export default VeiculoKM;