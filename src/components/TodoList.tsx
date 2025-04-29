import { TodoType } from "../interface";
import TodoComponent from "./TodoComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateTodos } from "../redux/slice/todoSlice";

const TodoList = () => {
  const { todoList } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const updateTodo = (id: TodoType["id"]) => {
    console.log(id);
    const updatedTodos: TodoType[] = todoList.map((todo) =>
      id === todo.id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : { ...todo }
    );
    dispatch(updateTodos([...updatedTodos]));
  };

  return (
    <div className="pt-8 max-h-[85vh] overflow-auto">
      {todoList.map((todo: TodoType) => (
        <TodoComponent todo={todo} key={todo.id} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
