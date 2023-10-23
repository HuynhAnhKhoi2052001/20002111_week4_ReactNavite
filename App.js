
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screen1 from './screens/2_a.js';
import screen2 from './screens/2_b.js';
let Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='screen1' component={screen1} options={{headerShown:false}}></Stack.Screen>      
     <Stack.Screen name='screen2' component={screen2} options={{headerShown:false}}></Stack.Screen>      
     </Stack.Navigator>
    </NavigationContainer>
  );
}

