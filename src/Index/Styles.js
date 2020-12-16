import {StyleSheet} from 'react-native';
import { cor_padrao_ica } from '../Login/Css';
import {Platform} from 'react-native';

const StiloIndex = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cor_padrao_ica,
    },
    view_topo: {
        //flex:1,
        marginTop: Platform.OS === 'ios' ? 5: 30,
        //paddingTop: 30,
        marginHorizontal: 10
    },
    text_topo: {
        color: "#fff",
        fontSize: 16,
        textAlign: "right"
    }
    

  });

  export default StiloIndex;