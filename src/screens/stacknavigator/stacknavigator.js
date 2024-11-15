import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import COLORS from '../../const/colors';


import Welcomeboard from '../onboardscreen';
import Login from '../login';
import Signup from '../signup';


const Stack = createStackNavigator();

const StackNavigation = () => {

  return (

 <NavigationContainer>

    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="board">
        <Stack.Screen name="board" component={Welcomeboard} />
         <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
              
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default StackNavigation;


