import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Users from '../helpers/USERS';

export default function Login({navigation}) {

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    const user = Users.find(
      (user) =>
        user.first_name.toLowerCase() === firstName.toLowerCase() &&
        user.email.toLowerCase() === email.toLowerCase()
    );
    setIsAuthenticated(!!user);
    if (user) {
      navigation.navigate('ShoppingPage', { user: user });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please log in to browse catalog</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
      
  <View style={styles.buttonWrapper}>
    <Button buttonStyle={styles.button} disabled={!firstName || !email} title="Log in" onPress={handleFormSubmit} />
  </View>
{!isAuthenticated && <Text style={styles.errorText}>Wrong first name and/or email combination.</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal:10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  text:{
    textAlign:'center',
    marginVertical:10,
  },
  buttonWrapper: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  }
});
