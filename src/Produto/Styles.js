import {StyleSheet, Platform} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';


const StiloProdutos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
      //alignItems: "center",
      //justifyContent: "center"
    },
    text_grupo: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#fff",
      marginHorizontal: 10,
      textAlign: "right"
    }
    
  });

  export default StiloProdutos;