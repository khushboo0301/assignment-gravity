import React from "react";
import { TodoType } from "../interface";
import { HiTrash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteTodo } from "../redux/slice/todoSlice";
interface TodoComponentProps {
  todo: TodoType;
  updateTodo: (id: number | string | undefined) => void;
}

const TodoComponent: React.FC<TodoComponentProps> = ({ todo, updateTodo }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex items-center justify-between my-2">
      <input
        type="checkbox"
        className="checkbox checkbox-primary mx-2"
        checked={todo.completed}
        onClick={() => updateTodo(todo.id)}
        onChange={() => {}}
      />
      <div
        style={{ backgroundColor: todo.color }}
        className="rounded-full h-[48px] w-[400px] flex items-center px-4"
      >
        <span
          className={`truncate block w-full text-left text-white ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </span>
      </div>
      <button
        className="btn btn-primary rounded-full text-xl px-3"
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        <HiTrash />
      </button>
    </div>
  );
};

export default TodoComponent;
