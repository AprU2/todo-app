import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import todoStore from "../../../../store/todo-store";
import { TodoItem } from "../todo-item/todo-item";
import "./todo-list.scss";

const TodoList = observer(() => {
  const { t } = useTranslation();

  const todosSorted = todoStore.todos.slice().sort((a, b) => {
    if (a.isComplete === b.isComplete) return 1;
    return a.isComplete ? 1 : -1;
  });

  const todoListStyle = classNames("todo-list", {
    "with-border": todosSorted.length !== 0,
    empty: todosSorted.length === 0,
  });

  return (
    <div className={todoListStyle}>
      {todosSorted.length !== 0
        ? todosSorted.map((todo) => <TodoItem key={todo._id} todo={todo} />)
        : t("todoList.todoListEmpty")}
    </div>
  );
});

export default TodoList;
