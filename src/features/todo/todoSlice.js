import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("todo")) || [],
  filter: "All",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      console.log(state);
    },
    addTodo: (state, action) => {
      state.value.push(action.payload);

      localStorage.setItem("todo", JSON.stringify(state.value));
    },

    markTodo: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index === -1) {
        return;
      }

      state.value[index].isComplete = !state.value[index].isComplete;
      localStorage.setItem("todo", JSON.stringify(state.value));
    },
    updateTodo: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index === -1) {
        return;
      }
      state.value[index] = action.payload;
      localStorage.setItem("todo", JSON.stringify(state.value));
    },
    filterTodo: (state, action) => {
  state.filter = action.payload;
},

    delTodo: (state, action) => {
      const newTodo = state.value.filter(
        (item) => item.id !== action.payload.id,
      );

      state.value = newTodo;
      localStorage.setItem("todo", JSON.stringify(newTodo));
    },
  },
});

export const { markTodo, updateTodo, delTodo, addTodo, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
