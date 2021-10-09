import React, {useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import Header from './Componants/Header';
import GameField from './Componants/GameField';
import Color from './Constant/Color';
import StartGameScreen from './Componants/StartGameScreen';
import GameOver from './Componants/GameOver';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const App = () => {
  const [usernum, setusernum] = useState();

  const [guessround, setguessround] = useState(0);

  const newgamestart = () => {
    setguessround(0);
    setusernum(null);
  };

  const startgame = selectednum => {
    setusernum(selectednum);
    setguessround(0);
  };

  const Gameoverhandler = NumofRound => {
    setguessround(NumofRound);
  };

  let content = <GameField onStartGame={startgame} />;

  if (usernum && guessround <= 0) {
    content = (
      <StartGameScreen userchoice={usernum} onGameover={Gameoverhandler} />
    );
  } else if (guessround > 0) {
    content = (
      <GameOver
        roundsnum={guessround}
        usernumb={usernum}
        onrestart={newgamestart}
      />
    );
  }

  return (
    <View style={styles.mainscreen}>
      <Header  style={styles.txt}title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: Color.appbg,
  },
});
export default App;
