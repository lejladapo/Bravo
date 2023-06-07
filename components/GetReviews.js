import {View, Text, TextInput, StyleSheet, Button, FlatList, Pressable} from "react-native";
import {firebase} from '../config';
import {useEffect, useState} from "react";

export default function GetReviews() {

    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('newData');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await todoRef.get();
                const users = [];
                querySnapshot.forEach((doc) => {
                    const { description } = doc.data();
                    users.push({
                        id: doc.id,
                        description,
                    });
                });
                setUsers(users);
            } catch (error) {
                // Handle the error here
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