import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import Data from '../helpers/DATA';
import ItemView from './ItemView';
import { useState } from 'react';

export default function ShoppingPage() {

    return(
        <View>
            <FlatList data={Data}
                alwaysBounceVertical={false}
                renderItem={itemData => <ItemView item={itemData.item} />}
            />
        </View>
    );
}