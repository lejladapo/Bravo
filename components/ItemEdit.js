import {ScrollView, View, Modal, Button, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
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
  <FlatList
    data={[item]} 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => (
      <View>
        <Text style={styles.textTop}>{item.brand}</Text>

        <View style={styles.viewTop}>
            <View style={styles.leftContainer}>
            <Text style={styles.textRight}>{item.type}</Text>
            </View>
        <View style={styles.rightContainerTop}>
            <Text style={styles.price}>{item.price}$</Text>
        </View>
        
        </View>
        <View style={styles.viewBottom}>
            <View style={styles.leftContainer}>
            <Text style={styles.descriptionHeading}>Description</Text>
            <Text style={styles.text}>{item.description}</Text>
            </View>
        <View style={styles.rightContainer}>
        <Image source={require('../assets/rey-ban.webp')} style={{ width: 60, height: 60 }} />
        </View>
        
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title='add to cart' onPress={showCart} />
          </View>
          <Cart visible={modalVisible} sendCart={item} onClose={hideCart} />
          <View style={styles.buttonWrapper}>
            <Button title='post a review' onPress={showReview} />
          </View>
          <AddReview visible={reviewVisible} item={item} onClose={hideReview} />
        </View>
      </View>
    )}
  />
<Button style={styles.close} title='close' onPress={onClose} />

</Modal>


  );
}

const styles = StyleSheet.create({
    viewTop: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:50,
        borderBottomWidth:2,
        opacity:0.8
      },
      textTop: {
        marginTop:20,
        fontSize: 30,
        textAlign: 'center',
      },
      viewBottom: {
        paddingTop:30,
        paddingBottom:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:50,
        borderBottomWidth:2
      },
      leftContainer: {
        flex: 1,
        alignItems:'center'
      },
      rightContainerTop: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'black',
        paddingTop:20,
        paddingBottom:20,
      },
      rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
      },
      text: {
        marginVertical: 15,
        textAlign:'center'
      },
      textRight:{
        marginVertical:5,
        fontWeight:'bold',
      },
      descriptionHeading: {
        fontWeight: 'bold',
      },
      price: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'white',
      },
    buttonContainer: {
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonWrapper: {
      marginHorizontal: 50,
      marginVertical:10
    },
  });
  