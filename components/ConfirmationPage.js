import {View, Text, Modal, FlatList, Pressable, ScrollView, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function ConfirmationPage() {

    return(
            <View>
                <Text>Confirmation Page</Text>
                <Text>Your order has been shipped!</Text>
            </View>
    );
}