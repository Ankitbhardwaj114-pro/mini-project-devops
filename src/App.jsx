import React, { useState } from "react";
import { Trash2, Check, Plus } from "lucide-react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <div className="todo-card">
        <h1>Todo List</h1>

        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="icon-button add-button">
            <Plus />
          </button>
        </form>

        <div className="todo-list">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <button
                className="icon-button toggle-button"
                onClick={() => toggleTodo(todo.id)}
              >
                <Check />
              </button>

              <span className="todo-text">{todo.text}</span>

              <button
                className="icon-button delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="empty-state">No todos yet. Add one above!</p>
        )}
      </div>

      <style>{`
        .todo-app {
          display: flex;
          justify-content: center;
          padding: 20px;
          min-height: 100vh;
          background-color: #f5f5f5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .todo-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          padding: 20px;
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .todo-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .todo-input {
          flex-grow: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .todo-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .icon-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .add-button {
          background-color: #007bff;
          color: white;
        }

        .add-button:hover {
          background-color: #0056b3;
        }

        .toggle-button {
          color: #6c757d;
        }

        .toggle-button:hover {
          background-color: #e9ecef;
        }

        .delete-button {
          color: #dc3545;
        }

        .delete-button:hover {
          background-color: #fee2e2;
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .todo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: white;
        }

        .todo-item.completed {
          background-color: #f8f9fa;
        }

        .todo-item.completed .todo-text {
          text-decoration: line-through;
          color: #6c757d;
        }

        .todo-text {
          flex-grow: 1;
          font-size: 16px;
        }

        .empty-state {
          text-align: center;
          color: #6c757d;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default TodoApp;
