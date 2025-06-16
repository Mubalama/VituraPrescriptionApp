// We defines the structure of a prescription object
export interface Prescription {
  id: string;
  patient: string;
  medication: string;
  prescriber: string;
  datePrescribed: string;
  status: 'active' | 'expired' | 'pending';
  pharmacy: string;
}