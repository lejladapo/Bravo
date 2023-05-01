import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.content}> 
        <Text style={styles.text}>Homepage</Text>
        <Text style={styles.text}>About us</Text>
        <FontAwesome name="search" style={styles.icon} /> 
        <FontAwesome name="shopping-cart" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'row'
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 20
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 40,
    paddingHorizontal: 10,
  },

  icon: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 20
  },
});