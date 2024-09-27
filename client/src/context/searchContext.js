import { useReducer } from "react";
import { createContext } from "react";
const INITIAL = {
    destination:undefined,
    country:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined,
    },
};

export const SearchContext = createContext(INITIAL)
const SearchReducer = (state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL;
        default:
             return state;
    }
};
export const SearchContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL);

    return (
        <SearchContext.Provider 
        value={{
        destination:state.destination,
        country:state.country,
        dates:state.dates,
        options:state.options,
        dispatch,}}>
            {children}
        </SearchContext.Provider>
    );
};