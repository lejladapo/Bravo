import {StyleSheet, Text, View, ImageBackground, FlatList, Button, TextInput} from 'react-native';
import Data from '../helpers/DATA';
import ItemView from './ItemView';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import {useNavigation} from "@react-navigation/native";


const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((item) => item.brand.toLowerCase().includes(query.toLowerCase()));
};

export default function ShoppingPage() {
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, Data);

  
  const renderItemData = ({ item }) => <ItemView item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome name="search" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for your favourite brand"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {query ? (
        <FlatList
          data={filteredItems}
          renderItem={renderItemData}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <FlatList
          data={Data}
          alwaysBounceVertical={false}
          renderItem={renderItemData}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        margin:10
      },
    input: {
      marginHorizontal: 10,
      padding: 10,
      borderColor: 'black',
      fontSize:15
    },
    icon: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 20
      },
  });