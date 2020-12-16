import React from 'react';
import {Platform} from 'react-native';
import Toast from 'react-native-tiny-toast'

export const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0
export const mensagem_erro_request = 'Ocorreu um erro de conexão. \n\n Tente novamente mais tarde.';
export const url_request = 'http://192.168.100.56:8080';


export const _data_atual = () => {
      let date = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let year = new Date().getFullYear();

      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

export const _informa = (mensagem) => {
      Toast.show(mensagem);
}

export const _informa_erro = msg => Toast.show(msg, {
      position: Toast.position.center,
      containerStyle:{
       backgroundColor: 'orangered',
       borderRadius: 15,
      },
      textStyle:{
       color:'#fff',
      },
      imgStyle:{},
      mask:false,
      maskStyle:{},
      duration: 2000,
      animation: true,
     });