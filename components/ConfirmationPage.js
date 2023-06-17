import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';

export default function ConfirmationPage() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for your purchase!</Text>
      
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Your order has been shipped!</Text>
          <Icon name="check-circle" type="font-awesome" color="green" size={50} />

        </View>
    
      <View style={styles.buttonPosition}>
        <Button
            title="Back to Home"
            onPress={navigateToHome}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonPosition: {
    display: 'flex',
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
  },
});
