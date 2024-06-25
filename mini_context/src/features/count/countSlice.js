import {createSlice} from '@reduxjs/toolkit'

const initialState ={ 
    count :0
}

export const countSlice= createSlice({ 
    name:"counter",
    initialState,
    reducers:{ 
        addCount:(state)=>{
            state.count += 1;
        },
        subCount:(state)=>{
            state.count -= 1;
        }        
    }
})

export const {addCount,subCount} = countSlice.actions;

export default countSlice.reducer;
