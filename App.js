import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './components/MainPage';
import Login from './components/Login';
import ShoppingPage from './components/ShoppingPage';
import AboutUsPage from './components/AbouUsPage';
import Cart from './components/Cart';
import ConfirmationPage from "./components/ConfirmationPage";
import AddReview from "./components/AddReview";
import GetReviews from "./components/GetReviews";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<>
    
   
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen name="default" component={MainPage} />
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name='About Us' component={AboutUsPage} />
      <Stack.Screen name="ShoppingPage" component={ShoppingPage} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Confirmation" component={ConfirmationPage} />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen name="GetReviews" component={GetReviews} />

    </Stack.Navigator>
    </NavigationContainer>
  
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 0
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
