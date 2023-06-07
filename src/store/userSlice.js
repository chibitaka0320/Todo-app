import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: [{
        listName: "やること",
        todos: [{ id: 0, text: "英語", click: true }, { id: 1, text: "プログラミング", click: false }]
    }]
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addTodo(state, action) {
            const index = action.payload.index;
            const newClip = action.payload.todo;
            const lastId = state.items[index].todos.length > 0 ? state.items[index].todos[state.items[index].todos.length - 1].id : 0;
            const newId = lastId + 1;
            newClip.id = newId;
            state.items[index].todos.push(newClip);
        },
        removeTodo: (state, action) => {
            const listIndex = action.payload.index;
            const todoId = action.payload.id;
            state.items[listIndex].todos = state.items[listIndex].todos.filter(item => item.id !== todoId);
        },
        blukRemoveTodo: (state, action) => {
            const index = action.payload;
            state.items[index].todos = state.items[index].todos.filter(item => item.click === false);
        },
        toggleClick: (state, action) => {
            const listIndex = action.payload.index;
            const todoId = action.payload.id;
            const index = state.items[listIndex].todos.findIndex(item => item.id === todoId);
            state.items[listIndex].todos[index].click = !state.items[listIndex].todos[index].click;
        },
        addList(state, action) {
            const newList = action.payload;
            state.items.push(newList);
        },
        removeList(state, action) {
            const index = action.payload;
            state.items.splice(index, 1);
        }
    },
})
export const { addTodo, removeTodo, toggleClick, addList, removeList, blukRemoveTodo } = userSlice.actions;
export default userSlice.reducer

