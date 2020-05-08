import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './src/Screen'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import Screen4 from './src/screens/Screen4'
import Screen5 from './src/screens/Screen5'
import Screen6 from './src/screens/Screen6'
import Screen7 from './src/screens/Screen7'
import Screen8 from './src/screens/Screen8'
import Screen9 from './src/screens/Screen9'
import Screen10 from './src/screens/Screen10'
import Screen11 from './src/screens/Screen11'
import Screen12 from './src/screens/Screen12'
import Screen13 from './src/screens/Screen13'
import Screen14 from './src/screens/Screen14'
import Screen15 from './src/screens/Screen15'
import Screen16 from './src/screens/Screen16'
import ScreenTY from './src/screens/ScreenTY'
import ScreenPP from './src/screens/ScreenPP'
// import ScreenCont from './src/'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="1" headerMode="none">
        <Stack.Screen name="1" component={Screen1} />
        <Stack.Screen name="2" component={Screen2} />
        <Stack.Screen name="3" component={Screen3} />
        <Stack.Screen name="4" component={Screen4} />
        <Stack.Screen name="5" component={Screen5} />
        <Stack.Screen name="6" component={Screen6} />
        <Stack.Screen name="7" component={Screen7} />
        <Stack.Screen name="8" component={Screen8} />
        <Stack.Screen name="9" component={Screen9} />
        <Stack.Screen name="10" component={Screen10} />
        <Stack.Screen name="11" component={Screen11} />
        <Stack.Screen name="12" component={Screen12} />
        <Stack.Screen name="13" component={Screen13} />
        <Stack.Screen name="14" component={Screen14} />
        <Stack.Screen name="15" component={Screen15} />
        <Stack.Screen name="16" component={Screen16} />
        <Stack.Screen name="TY" component={ScreenTY} />
        <Stack.Screen name="PP" component={ScreenPP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;