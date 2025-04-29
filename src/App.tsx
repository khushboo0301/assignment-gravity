import { useDispatch } from "react-redux";
import MainLayout from "./layout/MainLayout";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { updateTodos } from "./redux/slice/todoSlice";
import { fetchTodos } from "./redux/thunk/todoThunk";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todoItemList") || "[]");
    list.length ? dispatch(updateTodos(list)) : dispatch(fetchTodos());
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-neutral p-6">
      <MainLayout />
    </div>
  );
};

export default App;
