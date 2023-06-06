import {View, Text, Modal, FlatList, Pressable, ScrollView, Button} from 'react-native';
import table from "../styles/table";
import ItemEdit from "./ItemEdit";

export default function Cart({sendCart, visible, onClose}) {
    return(
        <Modal visible={visible} animationType='slide'>
            <View>
                <Text>{sendCart.type}</Text>
                <Text>{sendCart.brand}</Text>
                <Text>{sendCart.id}</Text>
                <Text>{sendCart.price}</Text>
                <Button title='Close' onPress={onClose} />
            </View>
        </Modal>

    );
}