import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const images = [
  require('../assets/test.jpeg'),
  require('../assets/glasses.jpeg'),
  require('../assets/sunglasses.jpeg'),
];

const texts = ['Ray-Ban', 'Gucci', 'Versace'];

export default function MainPage() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigation = useNavigation();

  const handleShopClick = () => {
    navigation.navigate('Login');
  };

  const handleAboutUsClick = () => {
    navigation.navigate('About Us');
  }

  const handleOurTeamClick = () => {
    navigation.navigate('Our Team');
  }


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
        <TouchableOpacity onPress={handleAboutUsClick}>
        <Text style={styles.href}>About us</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={handleShopClick}>
            <Text style={styles.href}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOurTeamClick}>
            <Text style={styles.href}>Our Team</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        top:0,
        width:'100%',
        height:'100%'
      },
      text: {
        color: 'white',
        fontSize: 22,
        lineHeight: 80,
        fontWeight: 'bold',
        backgroundColor: '#000000c0',
        textAlign:'center'
      },
      navbar: {
        backgroundColor: 'black',
        opacity:0.8,
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        display: 'flex',
        flexDirection: 'row'
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 15,
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