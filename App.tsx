import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MapScreen from './src/screens/MapScreen';
import OtherScreen from './src/screens/OtherScreen';
import type { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Explore">
          {() => <ExploreScreen />}
        </Stack.Screen>
        <Stack.Screen name="Agenda">
          {() => <AgendaScreen />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {() => <ProfileScreen />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
