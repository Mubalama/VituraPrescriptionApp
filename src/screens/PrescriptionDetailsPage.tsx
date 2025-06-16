import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Prescription } from '../models/Prescription';
import { RootStackParamList } from '../navigation/types';

type DetailPageRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export default function PrescriptionDetailsPage() {
   // Get the prescription passed via navigation params
  const route = useRoute<DetailPageRouteProp>();
  const { prescription } = route.params;
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{prescription.medication}</Text>
      {/* Detailed fields */}
      <Text>Patient: {prescription.patient}</Text>
      <Text>Prescriber: {prescription.prescriber}</Text>
      <Text>Date Prescribed: {prescription.datePrescribed}</Text>
      <Text>Status: {prescription.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
