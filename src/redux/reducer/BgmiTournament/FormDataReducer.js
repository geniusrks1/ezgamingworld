import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseinit";


export const addFormData=createAsyncThunk(
    'formData/add',
    async(formData)=>{
        await addDoc(collection(db,'teams'),formData);
        return formData;
    });






export const formData= createSlice({
    name:'formData',
    initialState:{
        teamName: '',
        leaderName: '',
        playerName1: '',
        playerName2: '',
        playerName3: '',
        playerName4: '',
        verifyEmail: '',
        phoneNumber: '',
    },
    reducers:{
        updateFormData:(state,action)=>{
            return {...state,...action.payload};
        },
        resetFormData:(state)=>{
            return{
                teamName: '',
                leaderName: '',
                playerName1: '',
                playerName2: '',
                playerName3: '',
                playerName4: '',
                verifyEmail: '',
                phoneNumber: '',
            };
        }
    }

});


export const {updateFormData,resetFormData}=formData.actions;
export const formDataReducer=formData.reducer;