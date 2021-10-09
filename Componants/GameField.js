import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import Color from '../Constant/Color';
import Input from './Input';
import NumberContainer from './NumberContainer';
import Mybutton from './Mybutton';

const GameField = props => {
  const [enterednumber, setenterednumber] = useState('');
  const [conferm, setcomferm] = useState(false);
  const [selectednum, setselectednum] = useState();

  const valuehandler = inputval => {
    setenterednumber(inputval.replace(/[^0-9]/g, ''));
  };
  const resetinput = () => {
    setenterednumber('');
    setcomferm(false);
  };
  const conferminput = () => {
    const choosennum = parseInt(enterednumber);

    Keyboard.dismiss();

    if (isNaN(choosennum) || choosennum <= 0 || choosennum > 99) {
      Alert.alert('Invalid Number', 'Number has a number between 1 to 99', [
        {text: 'OK', style: 'destructive', onPress: resetinput},
      ]);
      return;
    }

    setcomferm(true);
    setselectednum(choosennum);
    setenterednumber('');
  };

  let cnf;
  if (conferm) {
    cnf = (
      <Card style={styles.cnfcard}>
        <Text style={{color: 'black',fontFamily:'Night Trippers'}}>Your Selected Number</Text>
        <NumberContainer>{selectednum}</NumberContainer>
        <Mybutton
        style={styles.startgame}
          onPress={() => props.onStartGame(selectednum)}
        >Start Game</Mybutton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback 
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputcontainer}>
          <Card style={styles.inputfield}>
            <Input
              hint="Enter a Number"
              style={styles.input}
              blurOnSubmit
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={valuehandler}
              value={enterednumber}
            />
          </Card>
          <View style={styles.btncontainer}>
            <View style={styles.btn}>
              <Mybutton style={styles.rstbtn}
                onPress={resetinput}
              > Reset</Mybutton>
            </View>
            <View style={styles.btn}>
              <Mybutton style={styles.cnfbtn}
                onPress={conferminput}
              > Conferm </Mybutton>
            </View>
          </View>
        </Card>
        {cnf}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  btncontainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  inputcontainer: {
    width: 400,
    height: 160,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: '#bfecf5',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#f57a22',
    marginBottom: 10,
    fontFamily:'Night Trippers'
  },
  btn: {
    width: 110,
    borderRadius: 5,
  },
  inputfield: {
    backgroundColor: 'white',
    width: '46%',
    marginTop: 10,
    marginBottom: 30,
  },
  input: {
    textAlign: 'center',
    fontWeight:'bold',
  },
  cnfcard: {
    backgroundColor: Color.appbg,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cnfbtn:{
    backgroundColor:Color.btncolor
  },
  rstbtn:{
    backgroundColor:'red'
  },
  startgame:{
    backgroundColor:'green'
  },
});
export default GameField;
