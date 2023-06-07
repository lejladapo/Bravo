import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import {firebase} from '../config';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function AddReview() {

  const todoRef = firebase.firestore().collection('newData');
  const[addData, setAddData] = useState('');

  const addField = () => {
    if(addData && addData.length > 0) {
        const data = {
            description: addData,
        };
        todoRef
            .add(data)
            .then(() => {
                setAddData('');
            })
            .catch((error) => {
                alert(error);
            })
    }
  }
    const navigation = useNavigation();

  const goToReviews = () => {
      navigation.navigate('GetReviews');

  }
  return(
      <View>
          <TextInput placeholder='Add review' onChangeText={(description) => setAddData(description)} value={addData} />
            <Button title='add review' onPress={addField} />
          <Button title='see all' onPress={goToReviews} />
      </View>
  )
}