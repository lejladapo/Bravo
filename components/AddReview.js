import {View, Text, TextInput, StyleSheet, Button, Image, Modal} from "react-native";
import {firebase} from '../config';
import {useState} from "react";
import GetReviews from "./GetReviews";

export default function AddReview({ item, visible, onClose, user }) {

  const todoRef = firebase.firestore().collection('newData');
  const[addData, setAddData] = useState('');
  const [userId, setUserId] = useState('');


  const addField = () => {
    if (addData && addData.length > 0) {
      const data = {
        id_item: item.id,
        description: addData,
        userId: user.id, 
      };
      setUserId(user.id);
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

  const deleteField = (reviewId) => {
    todoRef
      .doc(reviewId)
      .delete()
      .catch((error) => {
        alert(error);
      });
  };

  return(
    <>
      <Modal visible={visible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder='Add review'
              onChangeText={(description) => setAddData(description)}
              value={addData}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button title='add review' onPress={addField} />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title='close' onPress={onClose} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.centeredContainer}>
      <GetReviews sendItemId={item} deleteField={deleteField} user={user} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '90%',
  },
  input: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    opacity: 0.5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonWrapper: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});