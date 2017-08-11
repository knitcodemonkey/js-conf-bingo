import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Dimensions from 'Dimensions';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        'Serverless', 'In the Cloud', 'ES6', 'CSS-in-JS', 'ReactJS',
        ''
      ]
    };
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.body}>
        <View>
          <Text>Javascript Conference Bingo</Text>
        </View>
        <View style={styles.grid}>
          {/* Column 1 */}
          <View style={styles.col}>
          {
            this.state.squares.map( (square, idx) => (
              <View style={styles.row} key={idx}>
                <Text>{square}</Text>
              </View>
            ))
          }
          </View>

          <View style={styles.col}>
            <View style={styles.row}>
              <Text>One One</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
          </View>

          {/* Column 2 */}
          <View style={styles.col}>
            <View style={styles.row}>
              <Text>One One</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
            <View style={styles.row}>
              <Text>One Two</Text>
            </View>
          </View>

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
    borderColor: "red",
    borderWidth: 1,
    flexDirection: 'row',
  },
  col: {
    borderColor: "green",
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    padding: 10,
    borderColor: "green",
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
