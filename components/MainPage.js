import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const images = [
  require('../assets/test.jpeg'),
  require('../assets/glasses.jpeg'),
  require('../assets/sunglasses.jpeg'),
];

const texts = ['Text 1', 'Text 2', 'Text 3'];

export default function MainPage() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigation = useNavigation();

  const handleShopClick = () => {
    navigation.navigate('Login');
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
    }, []);

    return(
      <>
        <View style={styles.container}>
            <ImageBackground
        resizeMode="cover"
        source={images[currentImageIndex]}
        style={styles.image}
      >
        <Text style={styles.text}>{texts[currentImageIndex]}</Text>
      </ImageBackground>
        </View>
        <View style={styles.navbar}>
        <View style={styles.content}> 
          <Text style={styles.href}>Homepage</Text>
          <TouchableOpacity onPress={handleShopClick}>
            <Text style={styles.href}>Shop</Text>
          </TouchableOpacity>
          <FontAwesome name="search" style={styles.icon} /> 
          <FontAwesome name="shopping-cart" style={styles.icon} />
        </View>
      </View>
      </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
      },
      image: {
        top:0,
        width:'100%',
        height:300
      },
      text: {
        color: 'white',
        fontSize: 22,
        lineHeight: 80,
        fontWeight: 'bold',
        backgroundColor: '#000000c0',
      },
      navbar: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'row'
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 40,
        paddingHorizontal: 10,
      },
      href: {
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 20
      },
      icon: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 20
      },
})