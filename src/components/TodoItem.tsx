import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, deleteTodo, updateTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";

  const handleDeleteClick = () => {
    console.log("Deleting todo with id:", todo.id);
    deleteTodo(todo.id);
  };

  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : "Card--button__done"}
        >
          Update
        </button>
        <button onClick={handleDeleteClick} className="Card--button__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
