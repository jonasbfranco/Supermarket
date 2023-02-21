import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/pages/OnboardingScreen';
import HomeScreen from './src/pages/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)

  useEffect(() => {
    async function isFirtsLaunched(){
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    
      console.log(appData);
      
      if (appData == null) {
        setIsAppFirstLaunched(true)
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false)
      }
    }

    isFirtsLaunched();

  }, []);
  
  
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isAppFirstLaunched && 
            <Stack.Screen 
              name="OnboardingScreen" 
              component={OnboardingScreen}
              options={{ title: 'OnboardingScreen', headerShown: false }}
            />
          }
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'HomeScreen', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
