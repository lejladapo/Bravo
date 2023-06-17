import {View, FlatList, TextInput} from 'react-native';
import Data from '../helpers/DATA';
import ItemView from './ItemView';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((item) => item.brand.toLowerCase().includes(query.toLowerCase()));
};

export default function ShoppingPage({ navigation }) {
  const route = useRoute();
  const { user } = route.params;
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, Data);

  
  const renderItemData = ({ item }) => <ItemView item={item} user={user} />;
  

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
          renderItem={renderItemData}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: 'gray',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
};