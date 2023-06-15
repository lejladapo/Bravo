import {View, Text, Modal, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import { Button } from 'react-native-elements';

export default function Cart({sendCart, visible, onClose}) {

    const [counter, setCounter] = useState(1);
    const [newPrice, setNewPrice] = useState(sendCart.price);
    const navigation = useNavigation();

    const goToConfirmation = () => {
        navigation.navigate('Confirmation');
    };
    const addItem = () => {
    setNewPrice(newPrice+sendCart.price);
      setCounter(counter + 1);
    }

    const removeItem = () => {
        setNewPrice(newPrice-sendCart.price);
        setCounter(counter - 1);

    }

    return(
        <Modal visible={visible} animationType='slide'>
            <View style={styles.centeredContainer}>
            <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>{sendCart.type}</Text>
          <Text style={styles.text}>{sendCart.brand}</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.textCounter}>{counter}</Text>
        <View style={styles.rightContainer}>
        <View style={styles.buttonWrapper}>
            <Button style={styles.button} title="+" onPress={addItem} />
        </View>
        <View style={styles.buttonWrapper}>
            <Button style={styles.button} disabled={counter === 1} title="-" onPress={removeItem} />
        </View>
        </View>
        </View>
      </View>
      
        <Text style={styles.newPrice}>{newPrice}$</Text>
      </View>
        <View style={styles.buttonWrapperBottom}>
            <Button buttonStyle={styles.button} title='Buy' onPress={goToConfirmation} />
            </View>
        <Button buttonStyle={styles.button} title='Close' onPress={onClose} />
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal:30
    },
    leftContainer: {
      flex: 1,
    },
    rightContainer:{
        padding:10
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    newPrice: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    buttonWrapper:{
        marginVertical:5
    },
    buttonWrapperBottom: {
        marginVertical: 30,
        marginHorizontal:50
      },
    right:{
        flexDirection:'row',
        alignItems:'center',
    },
    textCounter:{
        marginRight:10,
        fontSize:25,
        fontWeight:'bold'
    },
    button: {
      marginTop: 20,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 5,
    },
  });