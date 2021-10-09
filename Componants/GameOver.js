import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Mybutton from './Mybutton';


const GameOver = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.txt1}>The Game is Over</Text>
        <Text style={styles.txt2}>Number of Round : {props.roundsnum}</Text>
        <Text style={styles.txt3}>User Number : {props.usernumb}</Text>
        <Mybutton
        style={styles.btnstyl}
          onPress={props.onrestart}
        >Start New Game </Mybutton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  txt1: {
    color: 'black',
    marginBottom: 20,
    fontSize: 25,
  },
  txt2: {
    color: 'black',
    marginBottom: 20,
  },
  txt3: {
    color: 'black',
    marginBottom: 20,
  },
  btnstyl:{
    backgroundColor:'green'
  }
});
export default GameOver;
