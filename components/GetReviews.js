import {View, Text, TextInput, StyleSheet, Button, FlatList, Pressable} from "react-native";
import {firebase} from '../config';
import {useEffect, useState} from "react";

export default function GetReviews({sendItemId, deleteField}) {

  const itemsID = sendItemId ? sendItemId.id : null;
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('newData');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await todoRef.get();
                const filteredUsers = [];
                querySnapshot.forEach((doc) => {
                    const { description } = doc.data();
                    const { id_item } = doc.data();
                    if (id_item == itemsID) {
                        filteredUsers.push({
                            id: doc.id,
                            description,
                        });
                    }
                });
                setUsers(filteredUsers);
            }catch (error) {
                console.log('Error');
            }
        };


        fetchData();
    }, []);

    const handleDelete = (reviewId) => {
      deleteField(reviewId);
    };

    return(
        <View style={styles.container}>
  <FlatList
    data={users}
    renderItem={({ item }) => (
      <Pressable>
        <View style={styles.itemContainer}>
          <Text style={styles.description}>{item.description}</Text>
            <Button
                  title="Delete"
                  onPress={() => handleDelete(item.id)}
                  color="red"
            />
            
        </View>
      </Pressable>
    )}
  />
</View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    itemContainer: {
      marginVertical: 10,
    },
    description: {
      textAlign: 'center',
    },
  });
  