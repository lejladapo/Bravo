import {View, Text, Pressable, ScrollView, Button} from 'react-native';
import table from '../styles/table';
import ItemEdit from './ItemEdit';
import { useState } from 'react';

const ItemView = ({ item, user }) => {
    const [visible, setVisible] = useState(false);
    const onPress = () => setVisible(true);

    return(
        <>
        
        <Pressable onPress={onPress} style={({ pressed }) => pressed && table.pressed}>
        <View style={table.row}>
          <View style={table.left}>
            <Text style={table.cellLeft}>{item.type}</Text>
            <Text style={table.cellLeft2}>{item.brand}</Text>
          </View>
          <View style={table.right}>
            <Text style={table.cellRight}>{item.price}$</Text>
          </View>
        </View>
      </Pressable>
      {visible && <ItemEdit visible={visible} item={item} user={user} onClose={() => setVisible(false)} />}
      
        </>
    )
}
export default ItemView;