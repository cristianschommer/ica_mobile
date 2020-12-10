import {StyleSheet} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';


const StiloVeiculo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
      //alignItems: "center",
      //justifyContent: "center"
    },
    scrool: {
        //marginHorizontal: 30
    },
    view_grupo: {
        height: 100,
        margin: 10,
        //backgroundColor: "#d10d27",
        borderRadius: 10,
        //alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    imagem_grupo: {
        width: 70,
        height: 70,
        alignSelf: "center",
        marginLeft: 10,
        //backgroundColor: "red"
    },
    texto_grupo: {
        fontSize: 24,
        color: "#fff",
        textAlign: "center",
        //alignSelf: "center",
        //marginLeft: 20
    }
  });

  export default StiloVeiculo;