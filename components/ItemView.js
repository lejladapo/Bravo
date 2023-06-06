import {View, Text, Pressable, ScrollView, Button} from 'react-native';
import table from '../styles/table';
import ItemEdit from './ItemEdit';
import { useEffect, useState } from 'react';
import {useNavigation} from "@react-navigation/native";
import Cart from "./Cart";


const ItemView = ({item}) => {
    const [visible, setVisible] = useState(false);
    const onPress = () => setVisible(true);

    return(
        <>
        <ScrollView>
        <Pressable onPress={onPress} style={({ pressed }) => pressed && table.pressed}>
        <View style={table.row}>
          <View style={table.left}>
            <Text style={table.cell}>{item.type}</Text>
            <Text style={table.cell}>{item.brand}</Text>
            <Text style={table.cell}>{item.id}</Text>
          </View>
          <View style={table.right}>
            <Text style={table.cell}>{item.price}$</Text>
          </View>
        </View>
      </Pressable>
      {visible && <ItemEdit visible={visible} item={item} onClose={() => setVisible(false)} />}
      </ScrollView>
        </>
    )
}
export default ItemView;