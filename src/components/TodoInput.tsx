import React from "react";

interface InpProps {
  todoInputValue: string;
  setTodoInputValue: (value: string) => void;
}

const TodoInput: React.FC<InpProps> = ({
  todoInputValue,
  setTodoInputValue,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-md rounded-full w-full"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
    </div>
  );
};

export default TodoInput;
