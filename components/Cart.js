import {View, Text, Modal, FlatList, Pressable, ScrollView, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

export default function Cart({sendCart, visible, onClose}) {

    const [counter, setCounter] = useState(1);

    const navigation = useNavigation();

    const goToConfirmation = () => {
        navigation.navigate('Confirmation');
    };

    const addItem = () => {
      setCounter(counter + 1);
    }

    const removeItem = () => {
        if(counter == 1) {
            onClose();
        }
      setCounter(counter - 1);

    }

    return(
        <Modal visible={visible} animationType='slide'>
            <View>
                <Text>{sendCart.type}</Text>
                <Text>{sendCart.brand}</Text>
                <Text>{sendCart.id}</Text>
                <Text>{sendCart.price}</Text>
                <Text>Quantity: {counter}</Text>
                <Button title='+' onPress={addItem} />
                <Button title='-' onPress={removeItem} />
                <Button title='Buy' onPress={goToConfirmation} />
                <Button title='Close' onPress={onClose} />
            </View>
        </Modal>

    );
}