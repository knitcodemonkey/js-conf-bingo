import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Row extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <View style={styles.row}>
        {
          this.props.squares.map((square, idx) => (
            <View style={styles.col} key={square}>
              <Text>{square}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    padding: 5,
  },
    row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Row;