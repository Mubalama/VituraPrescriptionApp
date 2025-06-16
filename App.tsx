import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

// App entry point – we sets up our navigation container
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
