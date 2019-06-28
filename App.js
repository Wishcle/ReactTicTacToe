import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Board extends Component {
  render() {
    return (
      <View>
        Test123
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
