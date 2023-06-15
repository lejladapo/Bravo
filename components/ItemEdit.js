
import { ScrollView, View, Modal, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-elements';
import { useState} from "react";

import Cart from "./Cart";
import AddReview from './AddReview';
import Swiper from 'react-native-swiper';

export default function ItemEdit({ item, onClose, user }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(false);

  const showCart = () => setModalVisible(true);
  const hideCart = () => setModalVisible(false);
  const showReview = () => setReviewVisible(true);
  const hideReview = () => setReviewVisible(false);

  const handleImagePress = () => {
    setImagesVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const close = () => {
    setImagesVisible(false);
  };

  const handleSwiperIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Modal visible={true} onRequestClose={onClose}>
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
              <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={{ uri: item.image[0] }} // Use the first URL from the array
                style={{ width: 200, height: 200 }}
              />
              </TouchableOpacity>
              <Modal visible={imagesVisible}>
                <Swiper
                  style={styles.swiperContainer}
                  loop={false}
                  index={currentIndex}
                  onIndexChanged={handleSwiperIndexChanged}
                >
                  {item.image.map((imageUrl, index) => (
                    <View style={styles.imageContainer} key={index}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={{ width: 350, height: 350 }}
                      />
                    </View>
                  ))}
                </Swiper>
                <Button onPress={close} title='close'/>
              </Modal>

              </View>
            </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button buttonStyle={styles.button} title='Add to cart' onPress={showCart} />
          </View>
          <Cart visible={modalVisible} sendCart={item} onClose={hideCart} />
          <View style={styles.buttonWrapper}>
            <Button buttonStyle={styles.button} title='Post a review' onPress={showReview} />
          </View>
          <AddReview visible={reviewVisible} item={item} user={user} onClose={hideReview} />
        </View>
      </View>
    )}
  />
<Button style={styles.close} title='Close' onPress={onClose} />

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
        flexDirection: 'column',
        justifyContent: 'center',
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
    imageContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },

    button: {
      marginTop: 20,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 5,

    }
  });
  