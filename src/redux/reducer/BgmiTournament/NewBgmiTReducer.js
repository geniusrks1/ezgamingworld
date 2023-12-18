



import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';





export const fetchDataFromFirebase= createAsyncThunk(
    'data/fetchDataFromFirebase',
    async (_, { rejectWithValue }) => {
        try {
          // Fetch data from Firebase, assuming 'collectionName' is your Firebase collection name
          const snapshot = await firebaseDB.collection('collectionName').get();
    
          // Extract data from Firebase snapshot and convert to array
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
    
          return data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      }



)