import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/count/countSlice'
import infoReducer from '../features/info/infoSlice'

export const store =configureStore({ 
     reducer: { 
        counter: countReducer,
        information: infoReducer
     }
})