import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.container.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.content}>Nectar</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#53B175',
  },
  content: {
    color: '#333',
  },
});

export default App;
