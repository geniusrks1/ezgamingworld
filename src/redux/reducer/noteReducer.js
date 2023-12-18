const {createSlice} =require('@reduxjs/toolkit');

const initialState={
    notes:[
        {
            text:"xyz",
            createdOn: new Date().toISOString(), // Convert Date to string
        }

    ]
};


const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers: {
      // This is the updated add function
      add: (state, action) => {
        state.notes.push({
          text: action.payload,
          createdOn: new Date().toISOString() // Storing date as a string
        });
      },
      // This is the delete function
      delete: (state, action) => {
        state.notes.splice(action.payload, 1);
      }
    }
  });

export const noteReducer=noteSlice.reducer;
export const actions=noteSlice.actions;

export const noteSelector=(state)=>state.noteReducer.notes;