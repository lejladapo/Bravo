import {ScrollView, View, Modal, Button, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useState} from "react";
import Cart from "./Cart";
import AddReview from './AddReview';

export default function ItemEdit ({ item, onClose}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [reviewVisible, setReviewVisible] = useState(false);

    const showCart = () => setModalVisible(true);
    const hideCart = () => setModalVisible(false);
    const showReview = () => setReviewVisible(true);
    const hideReview = () => setReviewVisible(false);

  return (
    <Modal>
        <View style={styles.view}>
          <Text style={styles.text}>{item.type}</Text>
          <Text style={styles.text}>{item.brand}</Text>
          <Image source={require('../assets/rey-ban.webp')} style={{ width: 60, height: 60 }} />
          <Text style={styles.text}>{item.description}</Text>
          <Text style={styles.price}>{item.price}$</Text>
        </View>
        <View>
            <Button style={styles.button} title='add to cart' onPress={showCart} />
            <Cart visible={modalVisible} sendCart={item} onClose={hideCart} />
            <Button style={styles.button} title='post a review' onPress={showReview} />
            <AddReview visible={reviewVisible} item={item} onClose={hideReview} />
        </View>

        <Button style={styles.close} title='close' onPress={onClose} />
    </Modal>
  );
}

const styles = StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        height:'60%'
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