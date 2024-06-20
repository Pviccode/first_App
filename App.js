import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// github is just a place you can store your file or entire project
// Initializing git is like introducing git into our project
// The command line "git init" initializes our project with git
// note: initializing git just makes it avilable to our project. It doesnt  cause it to start tracking chnages
// The command line "git status" tells what git has done so far in your project
// For git to be able to track a parti