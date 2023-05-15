import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';

const images = [
  require('../assets/test.jpeg'),
  require('../assets/glasses.jpeg'),
  require('../assets/sunglasses.jpeg'),
];

const texts = ['Text 1', 'Text 2', 'Text 3'];

export default function MainPage() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
    }, []);

    return(
        <View style={styles.container}>
            <ImageBackground
        resizeMode="cover"
        source={images[currentImageIndex]}
        style={styles.image}
      >
        <Text style={styles.text}>{texts[currentImageIndex]}</Text>
      </ImageBackground>
        </View>
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
})