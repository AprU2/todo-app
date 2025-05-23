import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer, Bounce } from "react-toastify";
import todoStore from "../../../../store/todo-store";
import "./add-todo-form.scss";

export const AddTodoForm = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error(t("alert.fieldCannotBeEmpty"), {
        position: "top-right",
        autoClose: 1000,
        className: "text-lg",
      });
      return;
    }

    todoStore.addTodo(input);
    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          value={input}
          name="add-todo-field"
          autoComplete="off"
          className="todo-input"
          type="text"
          placeholder={t("addTodoForm.addTodos")}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="todo-button">
          {t("addTodoForm.addButton")}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};
