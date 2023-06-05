import { ScrollView, View, Modal, Button, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ItemEdit ({ item, onClose}) {
    const navigation = useNavigation();
    const addToCart = () => {
          navigation.navigate('Cart');
      };
  return (
    <Modal>
        <View style={styles.view}>
          <Text style={styles.text}>{item.type}</Text>
          <Text style={styles.text}>{item.brand}</Text>
          <Image source={require('../assets/rey-ban.webp')} style={{ width: 60, height: 60 }} />
          <Text style={styles.text}>{item.description}</Text>
          <Text style={styles.price}>{item.price}$</Text>
          <Button style={styles.button} title='add to cart' onPress={addToCart}/>
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