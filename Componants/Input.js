import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput  {...props} placeholder={props.hint} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {

  },
});
export default Input;
