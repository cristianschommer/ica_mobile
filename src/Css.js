import {StyleSheet, Dimensions} from 'react-native';

//48887B
const width_total = Dimensions.get('window').width;
const cor_padrao_ica = "#48887B";

const StiloLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
      //alignItems: "center",
      justifyContent: "center"
    },
    scrool: {
        //marginHorizontal: 30
    },
    logo_ica_login: {
        height: 150, 
        width: 150, 
        borderRadius:150, 
        borderColor: "#fff", 
        borderWidth:2,
        marginTop: 50,
    },
    view_imagem: {
        padding: 30,
        alignItems: "center"
    },
    view_login: {
        backgroundColor: "#fff",
        flexDirection: "row", 
        flex: 1,
        marginHorizontal: 30,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    },
    text: {
        color: "#fff",
        fontSize: 16,
        marginHorizontal: 20,
        //padding: 20
    },
    imagem_input: {
        width: 22, 
        height: 22, 
        alignSelf: "center",
        marginLeft: 10,
    },
    input: {
        padding: 18,
        fontSize: 18,
        width: "88%",
        textAlign: "left",
        //borderBottomColor: "silver",
        //borderBottomWidth: 1,
        color: cor_padrao_ica,
        backgroundColor: "#fff",
        
        //borderBottomColor: cor_padrao_ica,
        //borderBottomWidth: 1
    },
    view_botao_entrar: {
        //alignItems: "center",
        //justifyContent: "center",
        margin: 30,
    },
    botao_entrar: {
        backgroundColor: cor_padrao_ica,
        //borderRadius: 10,
        //alignSelf: "center",
        padding: 16,
        borderColor: "#fff",
        borderWidth: 1,
        //alignContent: "center"
    },
    text_botao_entrar: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16
    }
  });

  export default StiloLogin;