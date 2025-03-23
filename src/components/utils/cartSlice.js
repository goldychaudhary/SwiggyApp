import { createSlice, current, original } from "@reduxjs/toolkit";


// const customAdd = (state, data) => {
//     state.items.push(data)
// }
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Mutating the state over here
            console.log("IN ADD ITEM", action.payload)
            state.items.push(action.payload)
            // customAdd(state,action.payload)
        },
        // duplicatItem:(state,action) =>{
        //    console.log(current(state))

        //    const state1 = original(state)
        //    console.log("STATE1", state1)
        //    const updatedState = [...state1.items, "Drink"]
        // //    addItem(updatedState)
        //    customAdd(state,updatedState)
        // },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearItems:(state)=>{
            state.items.length = 0;//[]
        }
    }
});

export const {addItem,removeItem,clearItems} = cartSlice.actions;
export default cartSlice.reducer;