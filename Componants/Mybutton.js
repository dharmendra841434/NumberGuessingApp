import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../Constant/Color';
const Mybutton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={{...styles.screen,...props.style}}>
        <Text style={{...styles.title,...props.txtstyle}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    color: '#fce803',
    fontWeight:'bold'
  },
});
export default Mybutton;
