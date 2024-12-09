import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // mutating/modifying our state.
      // earlier redux did not allow mutating the state. it required a new copy of state created, modify that and return it
      // with redux-toolkit we can directly mutate the state or return new state, although it still is working like older redux BTS
      // all this is done using immer lib
      console.log('state.items==>', current(state.items));
      let existingItem = state.items.find((item) => item.card.info.id === action.payload.card.info.id);
      console.log('existingItem==>', existingItem);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;