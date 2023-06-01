import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutUsPage() {

    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
        <View style={styles.contentContainer}>
      <Text style={styles.title}>About Us</Text>
      <Image source={require('../assets/optique.jpeg')} style={styles.image} />
      <Text style={styles.description}>
        Welcome to our online store! We are dedicated to providing high-quality glasses and sunglasses to our customers. 
        Whether you're looking for stylish frames or UV-protected lenses, we have a wide selection to choose from.
        Our team is committed to excellent customer service and ensuring your shopping experience is seamless and enjoyable.
        Feel free to browse our collection and don't hesitate to reach out if you have any questions.
      </Text>
      <Text style={styles.additionalContent}>
          We offer free shipping on all orders and a 30-day return policy. Join our newsletter to receive exclusive offers and updates.
        </Text>
        <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.loginLink}>Click here to log in</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
    },
    contentContainer: {
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain',
      },
      description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
      },
      additionalContent: {
        fontSize: 14,
        textAlign: 'center',
        fontStyle: 'italic',
      },
    button: {
        marginTop: 20,
        width: '80%',
      },
      loginLink: {
        marginTop:10,
        color: 'blue',
      },
  });