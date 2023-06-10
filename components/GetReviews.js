import {View, Text, TextInput, StyleSheet, Button, FlatList, Pressable} from "react-native";
import {firebase} from '../config';
import {useEffect, useState} from "react";

export default function GetReviews({sendItemId}) {

    const itemsID = sendItemId.id;
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


    return(
        <View>
            <FlatList data={users}
                      renderItem={({item}) => (
                          <Pressable>
                              <View>
                                  <Text>{item.description}</Text>
                              </View>
                          </Pressable>
                      )} />
        </View>
    )
}