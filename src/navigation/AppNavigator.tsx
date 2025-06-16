import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrescriptionListPage from '../screens/PrescriptionListPage';
import PrescriptionDetailsPage from '../screens/PrescriptionDetailsPage';
import { RootStackParamList } from './types';

// We create a stack navigator for the app
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Prescriptions">
      <Stack.Screen name="Prescriptions" component={PrescriptionListPage} />
      <Stack.Screen name="Detail" component={PrescriptionDetailsPage} />
    </Stack.Navigator>
  );
}

