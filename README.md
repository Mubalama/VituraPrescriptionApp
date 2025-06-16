React Native Prescription Management App
App Name: SVituraPrescription App

A mobile app for pharmacists to view and manage prescriptions, built using **React Native with Expo** and the **MVVM (Model-View-ViewModel)** architecture.S

## Setup Instructions

    # Editor: Use your preferred editor, (Recommended): VS Code

# Env Setup

    Install node
    Install yarn: Open terminal and run `npm install -g yarn`
    Install expo-cli: Open terminal and run `npm install -g expo-cli`

1. # Setup Project

   **Clone or Download the Project**

   ```bash
   git clone <https://github.com/Mubalama/VituraPrescriptionApp> or download the Zip file
   cd VituraPrescriptionApp
   To Install dependencies: from terminal and run #`npx expo install`
   For particular dependecies Ex: in our project use:

    npm install @react-navigation/native
    # or if using yarn
    yarn add @react-navigation/native

    # AND

    npm install @react-navigation/stack
    # or
    yarn add @react-navigation/stack


    # Required dependencies for React Navigation
    npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

    # If using Expo, do this instead:
    yarn add react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

   ```

2. # Start the Expo Server
   npx expo start

# Run on your device or emulator

    - Press a : to open Android Emulator
    - Press i : to open iOS Simulator
    Scan the QR code in Expo Go app (iOS/Android)
    Or run on emulator via Expo CLI

3. # Assumptions Made

   - The app operates offline using static prescriptions.json data.
   - All prescriptions are assumed to belong to the same pharmacy.
   - Date strings are in ISO format (e.g., "2025-06-12")
   - No backend/API is integrated — this is a front-end prototype.
   - The app is built using TypeScript for better type safety. but can be mixed with Js when necessary.

4. # Architecture & State Management

   ## MVVM Architecture Design Pattern

   - Model (/models/Prescription.ts)

     - Defines the data structure for prescriptions.

   - View (/screens)

     - UI presentation components like PrescriptionListScreen and PrescriptionDetailScreen.

   - ViewModel (/viewmodels/usePrescriptionsViewModel.ts)

     - Manages UI state (loading, filters, search, sort) and transforms data for the View.

   - State Management
     - Uses React Hooks (useState, useEffect) for local state.
     - ViewModel encapsulates all filtering, searching, and sorting logic.
     - UI remains clean and focused only on rendering components

5. # Implemented Features:

   ✅ Prescription List with filters
   ✅ Search by medication or patient
   ✅ Detail screen for each prescription
   ✅ Sort by date (toggle newest ↔ oldest)
   ✅ Reset filters
   ✅ Loading state with spinner
   ✅ Clean MVVM structure
   ✅ Built with Expo for easy testing

6. # File Structure

   /assets
   └── prescriptions.json # Static data file
   /src
   ├── components # Reusable UI items
   ├── models # Data interfaces
   ├── navigation # Navigation stack
   ├── screens # Views / screens (Pages)
   ├── styles # Centralized theming (optional)
   └── viewmodels # ViewModel logic
   App.tsx # App entry point

7. # Development / Built With

   - React Native + Expo
   - TypeScript
   - React Navigation
   - MVVM Design Pattern
