import {StyleSheet} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';
import {Dimensions} from 'react-native';


const StiloVeiculo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
      //alignItems: "center",
      //justifyContent: "center",
    },
    view_central: {
        //flex: 1,
        marginTop: 30,
        //backgroundColor: "#ddd",
        marginHorizontal: 30,
        //alignItems: "center",
        //justifyContent: "center"
        borderRadius: 15,
        borderColor: "#fff",
        borderWidth: 1,
    },
    text_central: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        padding: 10
    },
    view_km: {
        marginTop: 10,
    },
    text_input_km: {
        fontSize: 20,
        width: "50%",
        textAlign: "center",
        alignSelf:"center",
      //  backgroundColor: "#ddd",
        color: "#fff",
        //height: 30,
        paddingBottom:15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    view_salvar_km: {
        //flexDirection: "row",
        paddingBottom: 10,
        borderColor: "#ddd",
        //borderWidth: 1,
        marginHorizontal: "10%"
    },
    imagem_km: {
        height: 30,
        width: 30,
        marginHorizontal: 10
    },
    text_km: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        margin: 20
    }    


  });

  export default StiloVeiculo;