import { configureStore, createSlice } from "@reduxjs/toolkit";



const initialState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')):{
    currentlySelected: {lat:-34.6075682, lon:-58.4370894, name: "Autonomous City of Buenos Aires"}, //Por ahora guardo la latitud ,longitud, los cuales se van a usar en en la api de current weather y el nombre
    favourites: [{lat:-34.6075682, lon:-58.4370894, name: "Autonomous City of Buenos Aires"}],
    count:0
};

export const countSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        setChangeSelected: (state, action) =>{
            return {...state, currentlySelected: action.payload}
        },
        addFavourite: (state, action) =>{
            return {
                ...state,
                count: state.count +1,
                favourites: [...state.favourites, action.payload ]
            };

        },
        removeFavourite: (state, action) =>{        

            
            return {
                ...state,
                count: state.count -1,
                favourites: state.favourites.filter(city => city.lat !== action.payload.lat)
            };
        }
    }
  });





 const store = configureStore({
    reducer: countSlice.reducer
  });
  
  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

  export {store}