import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../services/apiCall"
import { updateTodos } from "../slice/todoSlice";
import { pickRandomColor } from "../../utils/helper";
import { TodoType } from "../../interface";

export const fetchTodos = createAsyncThunk("todoThunk", async (_payload, { dispatch }) => {
    console.log("called");

    try {
        const { data } = await api.get("/todos?limit=10");
        const todos = data.todos.map((todo: TodoType) => ({
            ...todo,
            color: pickRandomColor(),
        }))
        dispatch(updateTodos(todos))
    } catch (error) {
        console.log(error);
    }
})