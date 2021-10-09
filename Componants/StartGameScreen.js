import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card';
import Color from '../Constant/Color';
import Mybutton from './Mybutton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const GenerateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum == exclude) {
    return GenerateRandomNum(min, max, exclude);
  } else {
    return rndNum;
  }
};

const RenderList = (value, NumofRound) => (
  <View key={value} style={styles.listItems}>
    <Text style={styles.listtxt}>#{NumofRound}</Text>
    <Text style={styles.listtxt}>{value}</Text>
  </View>
);

const StartGameScreen = props => {
  const initialGuess = GenerateRandomNum(1, 100, props.userchoice);
  const [currentguess, setcurrentguess] = useState(initialGuess);

  const [pastguess, setpastguess] = useState([initialGuess]);
  const currentlow = useRef(1);
  const currentheigh = useRef(100);

  const {userchoice, onGameover} = props;

  useEffect(() => {
    if (currentguess === userchoice) {
      onGameover(pastguess.length);
    }
  }, [currentguess, userchoice, onGameover]);

  const nextGuess = direction => {
    if (
      (direction === 'lower' && currentguess < props.userchoice) ||
      (direction === 'greater' && currentguess > props.userchoice)
    ) {
      Alert.alert("Dont't Lie!", 'This is Not Right...', [
        {Text: 'Sorry', style: 'Cancle'},
      ]);
      return;
    }

    if (direction === 'lower') {
      currentheigh.current = currentguess;
    } else {
      currentlow.current = currentguess + 1;
    }
    const nextnumber = GenerateRandomNum(
      currentlow.current,
      currentheigh.current,
      currentguess,
    );
    setcurrentguess(nextnumber);
    setpastguess(curpastguess => [nextnumber, ...curpastguess]);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.crd}>
        <Text style={styles.txt}>Computer's Guess</Text>
        <NumberContainer>{currentguess}</NumberContainer>
        <View style={styles.btn}>
          <View style={styles.btnc}>
            <Mybutton
              style={styles.lbtn}
              onPress={nextGuess.bind(this, 'lower')}>
              <View>
                <FontAwesome5 name={'minus'} size={20} color={'#fce803'} />
              </View>
            </Mybutton>
          </View>
          <View style={styles.btnc}>
            <Mybutton
              style={styles.gbtn}
              onPress={nextGuess.bind(this, 'greater')}>
              <View>
                <FontAwesome5 name={'plus'} size={20} color={'#fce803'} />
              </View>
            </Mybutton>
          </View>
        </View>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastguess.map((guess, index) =>
            RenderList(guess, pastguess.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.appbg,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 400,
    maxWidth: '80%',
  },
  crd: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnc: {
    width: 80,
  },
  btnstyle: {
    width: 120,
  },
  txt: {
    textDecorationColor: 'blue',
    fontSize: 20,
    color: 'black',
  },
  lbtn: {
    backgroundColor: '#02053d',
  },
  gbtn: {
    backgroundColor: '#02053d',
  },
  listItems: {
    padding: 10,
    width: 250,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'gray',
    marginHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    marginVertical: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listtxt: {
    color: 'yellow',
    fontWeight:'bold'
  },
});
export default StartGameScreen;
