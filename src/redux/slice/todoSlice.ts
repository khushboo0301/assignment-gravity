import { createSlice, nanoid, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { TodoType } from "../../interface";

const initialState: { todoList: TodoType[] } = {
    todoList: []
};

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        updateTodos: (state, action: PayloadAction<TodoType[]>) => {
            state.todoList = action.payload;
        },
        createTodo: (state, action: PayloadAction<TodoType>) => {
            state.todoList = [{ ...action.payload, id: nanoid() }, ...state.todoList];
        },
        deleteTodo: (state, action: PayloadAction<TodoType["id"]>) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(updateTodos, createTodo, deleteTodo),
            (state) => {
                localStorage.setItem("todoItemList", JSON.stringify(state.todoList));
            }
        );
    }
});

export const { updateTodos, createTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
