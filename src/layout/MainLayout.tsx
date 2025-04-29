import { useState } from "react";
import Popup from "../components/Popup";
import { MdAssignmentAdd } from "react-icons/md";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { pickRandomColor } from "../utils/helper";
import { createTodo } from "../redux/slice/todoSlice";

const MainLayout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { todoList } = useSelector((state: RootState) => state.todos);
  const [todoInputValue, setTodoInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    dispatch(
      createTodo({
        todo: todoInputValue,
        color: pickRandomColor(),
        completed: false,
      })
    );
    setIsPopupOpen(false);
    setTodoInputValue("");
  };

  return (
    <div className="max-w-[550px] mx-auto text-center p-5 relative min-h-[80vh]">
      <h1 className="text-primary text-4xl font-semibold">Todos</h1>
      {todoList.length ? (
        <TodoList />
      ) : (
        <p className="absolute top-1/2  left-0 text-center w-full">
          No todos found please add something
        </p>
      )}
      <div className="absolute bottom-3 w-full">
        <button
          className="btn btn-primary rounded-full px-3"
          onClick={() => {
            setIsPopupOpen(true);
          }}
        >
          <MdAssignmentAdd size={"1.5rem"} />
        </button>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Add Todo"
        onSubmit={handleAddTodo}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTodo();
          }}
        >
          <TodoInput
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
          />
        </form>
      </Popup>
    </div>
  );
};

export default MainLayout;
