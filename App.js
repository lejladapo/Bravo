import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
    <View style={styles.content}>
      <MainPage></MainPage>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 0
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
