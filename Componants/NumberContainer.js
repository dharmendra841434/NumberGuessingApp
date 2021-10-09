import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../Constant/Color';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
        padding:20,
        borderColor:'#f57a22',
        borderWidth:3,
        marginVertical:10,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'

    },
    txt:{
        fontSize:28,
        color:'#f57a22',
        fontWeight:'bold'
      

    }
 
});
export default NumberContainer;
