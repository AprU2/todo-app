import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import todoStore from "../../store/todo-store";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../helpers/storage-helper";
import { LanguageDropdown } from "../../components/global-components/languages-dropdown-component/languages-dropdown-component";
import TodoList from "./components/todo-list/todo-list";
import { AddTodoForm } from "./components/add-todo-form/add-todo-form";
import Column from "../../components/layout-components/column-component/column-component";
import BaseText from "../../components/global-components/text-component/text-component";
import Container from "../../components/layout-components/container-component/container-component";
import "./todo-page.scss";

const TodoPage = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const loadTodo = async () => {
      await todoStore.loadTodos();
      setLoading(false);
    };

    loadTodo();
  }, []);

  const LogOutButton = () => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => {
          deleteToken();
          navigate("/", { replace: true });
        }}
        className="logout-button"
      >
        {t("todoPage.logOutButton")}
      </button>
    );
  };

  if (loading) {
    return (
      <Column
        alignItems="center"
        justifyContent="center"
        className="full-height"
      >
        <div className="loader"></div>
      </Column>
    );
  }

  return (
    <>
      <LanguageDropdown />
      <LogOutButton />
      <Column
        alignItems="center"
        className="full-height overflow-y-auto"
        gap={30}
      >
        <Container className="main-content">
          <BaseText className="as-center" size="xl">
            {t("todoPage.yourTodos")}
          </BaseText>
          <div className="todo-container mt-15">
            <AddTodoForm />
            <TodoList />
          </div>
        </Container>
      </Column>
    </>
  );
};

export default TodoPage;
