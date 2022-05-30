import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentlySelected: {lat:-34.6075682, lon:-58.4370894, name: "Autonomous City of Buenos Aires"} //Por ahora guardo la latitud ,longitud, los cuales se van a usar en en la api de current weather y el nombre
};

export const countSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        setChangeSelected: (state, action) =>{
            return {...state, currentlySelected: action.payload}
        }
    }
  });

  export const store = configureStore({
    reducer: countSlice.reducer
  });