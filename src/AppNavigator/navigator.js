import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import bookDescription from '../screens/bookDescription';
import AllBooks from '../screens/allBooks';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="allBooks">
        <Stack.Screen name="bookDescription" component={bookDescription} />
        <Stack.Screen name="allBooks" component={AllBooks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
