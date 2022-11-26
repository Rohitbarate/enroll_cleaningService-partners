import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home'
import DetailsForm from './components/screens/DetailsForm'
import ServicesForm from './components/screens/ServicesForm';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign:'center',headerShown:false}}>
      <Stack.Screen name='Home' component={Home}  />
      <Stack.Screen name='DetailsForm' component={DetailsForm} />
      <Stack.Screen name='ServicesForm' component={ServicesForm} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
