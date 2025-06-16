import React from 'react';
import { FlatList, View, Text, Button, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { usePrescriptionsViewModel } from '../viewmodels/usePrescriptionsViewModel';
import PrescriptionItem from '../components/PrescriptionItem';


type NavigationProp = StackNavigationProp<RootStackParamList, 'Prescriptions'>
export default function PrescriptionListPage() {
   // Get navigation and ViewModel hooks
  const navigation = useNavigation<NavigationProp>();
  const { 
    prescriptions,
    setFilter,
    currentFilter, 
    searchQuery,
    setSearchQuery, 
    loading,
    sortDescending,
    toggleSort,
  } = usePrescriptionsViewModel();

  // Show loading spinner if data is still being loaded
   if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={{ marginTop: 10 }}>Loading prescriptions...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by medication or patient..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Status Filter Buttons + Reset */}
      <View style={styles.filter}>
        {['active', 'expired', 'pending'].map(status => (
          <Button
            key={status}
            title={status}
            color={currentFilter === status ? '#0066cc' : '#aaa'}
            onPress={() => setFilter(status === currentFilter ? null : status)}
          />
        ))}
        {/* Reset button to show all data */}
        <Button
        title='Reset'
        color="#cc0000"
        onPress={() => setFilter(null)}/>
      </View>

      {/* Sort toggle button */}
      <View style={styles.sortContainer}>
        <Button
          title={`Sort: ${sortDescending ? 'Newest → Oldest' : 'Oldest → Newest'}`}
          onPress={toggleSort}
          color="#0066cc"
        />
      </View>

      {/* FlatList to display filtered/search results */}
      <FlatList
        data={prescriptions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PrescriptionItem
            item={item}
            onPress={() => navigation.navigate('Detail', { prescription: item })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No prescriptions found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  // Button group for status filters
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  // Message when no data found
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  // Search input box style
    searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  // Loading screen container
   loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
