import classNames from "classnames";
import type { Todo } from "../../../../schemas/user-schema";
import todoStore from "../../../../store/todo-store";
import { Trash2 } from "lucide-react";
import BaseText from "../../../../components/global-components/text-component/text-component";
import "./todo-item.scss";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const TodoLabel = () => {
    const todoTextStyle = classNames("todo-title", {
      completed: todo.isComplete,
    });

    return (
      <label className="todo-label">
        <input
          type="checkbox"
          name="todo"
          checked={todo.isComplete}
          onChange={(e) =>
            todoStore.setTodoCompleted(todo._id, e.target.checked)
          }
          className="todo-checkbox"
        />
        <BaseText className={todoTextStyle}>{todo.title}</BaseText>
      </label>
    );
  };

  const DeleteTodoButton = () => {
    return (
      <button
        className="todo-delete"
        onClick={() => todoStore.deleteTodo(todo._id)}
      >
        <Trash2 size={20} className="delete-icon" />
      </button>
    );
  };

  return (
    <div className="todo-item">
      <TodoLabel />
      <DeleteTodoButton />
    </div>
  );
};
