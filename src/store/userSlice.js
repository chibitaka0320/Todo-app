import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: []
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addTodo(state, action) {
            const newClip = action.payload;
            const lastId = state.items.length > 0 ? state.items[state.items.length - 1].id : 0;
            const newId = lastId + 1;
            newClip.id = newId;
            state.items.push(newClip);
        },
        removeTodo: (state, action) => {
            const todoId = action.payload;
            state.items = state.items.filter(item => item.id !== todoId);
        },
        toggleClick: (state, action) => {
            const todoId = action.payload;
            const index = state.items.findIndex(item => item.id === todoId);
            state.items[index].click = !state.items[index].click;
        }
    },
})
export const { addTodo, removeTodo, toggleClick } = userSlice.actions;
export default userSlice.reducer

