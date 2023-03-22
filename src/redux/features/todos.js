import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, {payload}) => [...state, {id: (state.at(-1)?.id ?? 0) + 1, title: payload.title, done: false}],
        deleteTodo: (state, {payload}) => state.filter(todo => todo.id !== payload),
        toggleTodoStatus: (state, {payload}) => {
            const todo = state.find(td => td.id === payload);
            return [...state.filter(td => td.id !== payload), {...todo, done: !todo.done}].sort((a, b) => a.id - b.id)
        },
        updateTodoTitle: (state, {payload}) =>{
            const {id, title} = payload;
            const todo = state.find(td => td.id === id);
            return [...state.filter(td => td.id !== id), {...todo, title}].sort((a, b) => a.id - b.id);
        }
    }
});

export const {addTodo, deleteTodo, toggleTodoStatus, updateTodoTitle} = todosSlice.actions;

export default todosSlice.reducer;