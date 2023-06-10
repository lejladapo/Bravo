import {View, Text, TextInput, StyleSheet, Button, Image, Modal} from "react-native";
import {firebase} from '../config';
import {useState} from "react";
import GetReviews from "./GetReviews";

export default function AddReview({item, visible, onClose}) {

  const todoRef = firebase.firestore().collection('newData');
  const[addData, setAddData] = useState('');

  const addField = () => {
    if(addData && addData.length > 0) {
        const data = {
            id_item: item.id,
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

  return(
      <>
      <Modal visible={visible}>
      <View style={styles.modal}>
          <TextInput placeholder='Add review' onChangeText={(description) => setAddData(description)} value={addData} />
            <Button title='add review' onPress={addField} />
          <Button title='close' onPress={onClose} />
      </View>
      </Modal>
      <View>
          <GetReviews sendItemId={item} />
      </View>
     </>
  )
}
const styles = StyleSheet.create({
    modal:{
        justifyContent:'center',
        alignItems:'center',
        margin: 30,
        height:'60%'
    },
})