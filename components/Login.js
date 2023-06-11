import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
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
      navigation.navigate('ShoppingPage');
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
    <Button style={styles.button} disabled={!firstName || !email} title="Log in" onPress={handleFormSubmit} />
  </View>
{!isAuthenticated && <Text style={styles.errorText}>Wrong first name and email combination.</Text>}

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
  },
  text:{
    textAlign:'center',
    marginVertical:10
  },
  buttonWrapper: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
