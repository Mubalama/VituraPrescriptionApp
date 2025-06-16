import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Prescription } from '../models/Prescription';

export default function PrescriptionItem({
  item,
  onPress,
}: {
  item: Prescription;
  onPress: () => void;
}) {
  return (
    // Touchable card for each prescription
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.medication}>{item.medication}</Text>
      <Text>{item.patient}</Text>
      <Text>Status: <Text style={styles.status}>{item.status}</Text></Text>
    </TouchableOpacity>
  );
}

// Styles for the prescription card
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  medication: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    textTransform: 'capitalize',
  },
});
