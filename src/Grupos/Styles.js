import {StyleSheet} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';


const StiloGrupos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
      //alignItems: "center",
      //justifyContent: "center"
    },
    scrool: {
        //marginHorizontal: 30
    },
    view_veiculo: {
        paddingTop: 25,
    },
    view_grupo: {
        flex: 1,
        height: 100,
        marginHorizontal: 15,
        marginVertical: 20,
        //marginLeft: 20,
        width: "40%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10
    },
    imagem_grupo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        //marginLeft: 10,
        //backgroundColor: "red"
    },
    texto_grupo: {
        marginTop: 7,
        fontSize: 10,
        color: "#fff",
        fontWeight: 'bold',
        //textAlign: "left",
        //alignSelf: "center",
        //marginLeft: 20
    },
    view_rodape: {
        justifyContent: 'flex-end',
        height: 60,
        borderTopColor: "#fff",
        //borderTopWidth: 1
        
    },
    view_botoes_rodape: {
        flexDirection: "row", 
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center"
    },
    imagem_rodape: {
        height: 35,
        width: 35,
    }
    

  });

  export default StiloGrupos;