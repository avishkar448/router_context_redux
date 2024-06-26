import {createSlice} from '@reduxjs/toolkit'

const initialState ={ 
    name:""
}

export const infoSlice=createSlice({ 
    name:"information",
    initialState,
    reducers:{ 
        addInfo:(state,action)=>{ 
            state.name=action.payload;    
        }
    }
})

export const{addInfo} =infoSlice.actions;

export default infoSlice.reducer;