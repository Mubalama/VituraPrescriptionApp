import { useState, useEffect } from 'react';
import { Prescription } from '../models/Prescription';
import data from '../../assets/prescriptions.json'

export const usePrescriptionsViewModel = () => {
  // Stores all loaded prescriptions, selected status filter, the text entered in the search bar
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null);
  // Here we add search functionality
  const [searchQuery, setSearchQuery] = useState('');
  //Indicates whether the data is still loading
  const [loading, setLoading]= useState(true);
  const [sortDescending, setSortDescending] = useState(true); // Sort state

  useEffect(() => {
    // Here i set the timer to loading and set it to false after data is fully loaded (simulate fetch with delay)
    setTimeout(()=>{
      setPrescriptions(data as Prescription[]);
      setLoading(false);
    }, 1000); // set 1 second delay
    
  }, []);

  // Previous filtered logic
  /*const filtered = filteredStatus
    ? prescriptions.filter(p => p.status === filteredStatus)
    : prescriptions; */

    // Updated filter logic with Search functionality
    const filtered = prescriptions.filter(p => {
    const matchesStatus = filteredStatus ? p.status === filteredStatus : true;
    const matchesSearch =
      p.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.patient.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  })

  // Adding Sort by Date functionality
  .sort((a, b) => {
      const dateA = new Date(a.datePrescribed).getTime();
      const dateB = new Date(b.datePrescribed).getTime();
      return sortDescending ? dateB - dateA : dateA - dateB;
    });

  return {
    prescriptions: filtered, // filtered list returned to UI
    setFilter: setFilteredStatus,
    currentFilter: filteredStatus,
    searchQuery, setSearchQuery,
    loading,
    sortDescending,
    toggleSort: () => setSortDescending(prev => !prev),
  };
};
