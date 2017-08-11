import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
import Row from '../components/Row';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        'Serverless', 'In the Cloud', 'ES6', 'CSS-in-JS',
        'ReactJS', 'One', 'Two', 'Three',
        'Four', 'Five', 'Six', 'Seven',
        'Eight', 'One', 'Two', 'Three',
        'Four', 'Five', 'Six', 'Seven',
        'ReactJS', 'One', 'Two', 'Three',
      ],
      rows: 6,
      cols: 4
    };
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  squareRows(chunk_size) {
    const groups = arr.map( function(e,i){
      return i%chunk_size===0 && arr.slice(i,i+chunk_size);
    }).filter(function(e){ return e; });
  }

  render() {
    const { navigate } = this.props.navigation;
    const arrays = [];
    const squares = this.state.squares.slice(0);

    while (squares.length > 0) {
      arrays.push(squares.splice(0, this.state.cols));
    }

    return (
      <View style={styles.body}>
        <View>
          <Text>Javascript Conference Bingo</Text>
        </View>
        <View style={styles.grid}>
          {/* Column 1 */}
          {
            arrays.map( (squareSet, idx) => (
              <Row squares={squareSet} key={"row" + idx} />
            ))
          }
          </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  grid: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: (Dimensions.get('window').width * .25 - 10),
  },
  button: {
    width: (Dimensions.get('window').width * .5 - 30),
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 40,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30
  }
});
