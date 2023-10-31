const {createSlice} =require('@reduxjs/toolkit');

const initialState={
    notes:[
        {
            text:"xyz",
            createdOn:new Date()
        }

    ]
};


const noteSlice=createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        // this is add function
        add:(state,action)=>{
            state.notes.push({
                text:action.payload,
                createdOn:new Date()
            })
        },
        // this is delete function
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});

export const noteReducer=noteSlice.reducer;
export const actions=noteSlice.actions;

export const noteSelector=(state)=>state.noteReducer.notes;