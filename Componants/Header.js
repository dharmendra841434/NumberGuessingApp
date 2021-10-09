import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.headerstyle}>
      <Text style={styles.headertext}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerstyle: {
    width: '100%',
    height: 100,
    backgroundColor:'#deb647',
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'red',
    borderBottomWidth:8,
    
  },
  headertext: {
      color:'black',
      fontSize:35,
      fontWeight:'bold',
      fontFamily:'aremat font',
  },
});
export default Header;
