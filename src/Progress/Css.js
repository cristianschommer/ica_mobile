import { render } from 'react-dom';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';

export const StiloProgress = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: cor_padrao_ica,
        opacity: 0.5
      },
      modal: {
        
      },
      
      text: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        textAlign: "center"
      },
  });
