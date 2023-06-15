import {View, Text, TextInput, StyleSheet, Button, FlatList, Pressable} from "react-native";
import {firebase} from '../config';
import {useEffect, useState} from "react";
import USERS from "../helpers/USERS";
export default function GetReviews({sendItemId, deleteField, user}) {

    const itemsID = sendItemId ? sendItemId.id : null;
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('newData');
    const userId = user ? user.id : null; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await todoRef.get();
                const filteredUsers = [];
                querySnapshot.forEach((doc) => {
                    const { description, userId } = doc.data();
                    const { id_item } = doc.data();
                    if (id_item === itemsID) {
                      const user = USERS.find((user) => user.id === userId);
                      filteredUsers.push({
                        id: doc.id,
                        description,
                        user,
                      });
                    }
                });
                setUsers(filteredUsers);
                console.log(filteredUsers)
            }catch (error) {
                console.log('Error');
            }
        };


        fetchData();
    }, []);

    const handleDelete = (reviewId) => {
        deleteField(reviewId);
      };

      return (
        <View style={styles.container}>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <Pressable>
                <View style={styles.itemContainer}>
                  <View style={styles.leftSide}>
                    <View style={styles.nameView}>
                    <Text style={styles.heading}>Username:</Text>
                    <Text style={styles.text}>{item.user.first_name}</Text>
                    </View>
                    <View style={styles.descriptionView}>
                    <Text style={styles.heading}>Description:</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    </View>
                  </View>
                  {userId === item.user.id && (
                    <Button
                      title="Delete"
                      onPress={() => handleDelete(item.id)}
                      color="red"
                    />
                  )}
                </View>
              </Pressable>
            )}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
      },
      itemContainer: {
        marginVertical: 10,
        marginHorizontal: 50,
        
      },
      leftSide: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ddd',
        flex: 1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
      },
      text: {
        color: 'black',
        marginBottom:10
      },
      heading: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical:10
      },
      nameView:{
        flexDirection:'column',
      },
      descriptionView:{
        width:'40%'
      }
    });