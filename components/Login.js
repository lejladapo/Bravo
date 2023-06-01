import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, TextInput, StyleSheet, Button } from 'react-native';
import Users from '../helpers/USERS';

export default function Login({navigation}) {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const handleFormSubmit = () => {
        const user = Users.find(user => user.is_auth);
        setIsAuthenticated(!!user);
        if (user) {
          navigation.navigate('ShoppingPage');
        }
      };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <Button style={styles.button} title="Log in" onPress={handleFormSubmit} />
      {!isAuthenticated && <Text style={styles.errorText}>Wrong first name and email combination.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
