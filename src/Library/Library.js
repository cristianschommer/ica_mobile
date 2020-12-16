import React from 'react';
import {Platform} from 'react-native';

export const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0


export const _data_atual = () => {
      let date = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let year = new Date().getFullYear();

      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}