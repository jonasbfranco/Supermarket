import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
import OnboardingScreen from './src/pages/OnboardingScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      <Stack.Navigator>
        <Stack.Screen 
          name="OnboardingScreen" 
          component={OnboardingScreen}
          options={{ title: 'OnboardingScreen', headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Overview', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
