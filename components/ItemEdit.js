import {ScrollView, View, Modal, Button, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useState} from "react";
import Cart from "./Cart";
import AddReview from './AddReview';

export default function ItemEdit ({ item, onClose}) {

    const [itemsInCart, setItemsInCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const addToCart = () => {
        addToList(item);
        navigation.navigate('Cart');
       };

    const addReview = () => {
        navigation.navigate('AddReview');
       };

    const addToList = (item) => {
         setItemsInCart(currentList =>[...currentList, item]);
         console.log(itemsInCart);
     }
     
     const removeFromList = () => {
       
     }
    const showTaskInput = () => setModalVisible(true);
    const hideTaskInput = () => setModalVisible(false);

  return (
    <Modal>
        <View style={styles.view}>
          <Text style={styles.text}>{item.type}</Text>
          <Text style={styles.text}>{item.brand}</Text>
          <Image source={require('../assets/rey-ban.webp')} style={{ width: 60, height: 60 }} />
          <Text style={styles.text}>{item.description}</Text>
          <Text style={styles.price}>{item.price}$</Text>
          <Button style={styles.button} title='add to cart' onPress={showTaskInput} />
            <Cart visible={modalVisible}sendCart={item} onClose={hideTaskInput} />
            <Button style={styles.close} title='reviews' onPress={addReview} />
        </View>
        <Button style={styles.close} title='close' onPress={onClose} />
    </Modal>
  );
}

const styles = StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        height:'94%'
    },
    text:{
        margin:15,
        textAlign:'center'
    },
    price:{
        margin:15,
        fontWeight:'bold',
        fontSize:40
    },
})