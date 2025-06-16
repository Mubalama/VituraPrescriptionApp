// src/navigation/types.ts
import { Prescription } from '../models/Prescription';

export type RootStackParamList = {
  Prescriptions: undefined;
  Detail: { prescription: Prescription };
};
