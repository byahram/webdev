import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../utils/api";
import TodoBoard from "../components/TodoBoard";
import { Task, UserProps } from "../utils/types";
import { Navigate } from "react-router-dom";

export default function TodoPage({ user, setUser }: UserProps) {
  const [todoValue, setTodoValue] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const response = await api.get("/todo/tasks/getAll");

    if (!user) {
      setTasks([]);
      return;
    }

    const filtered = response.data.data.filter(
      (task: Task | null) => task?.user?._id === user?._id
    );

    setTasks(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTodo();
  };

  const handleAddTodo = async () => {
    try {
      const response = await api.post("/todo/tasks/add", {
        task: todoValue,
        isComplete: false,
      });
      console.log("response :: ", response);

      if (response.status === 200 || response.status === 201) {
        getTasks();
        setTodoValue("");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? "Error fetching todos: " + err.message
          : "An unexpected error occurred"
      );
    }
  };

  const handleEditTodo = (_id: string, task: string) => {
    setEditingId(_id);
    setEditingValue(task);
  };

  const handleSaveEdit = async (_id: string) => {
    if (!editingValue.trim()) return;
    try {
      await api.put(`/todo/tasks/update/${_id}`, {
        task: editingValue,
      });
      await getTasks();
      setEditingId(null);
      setEditingValue("");
    } catch (err) {
      setError(
        err instanceof Error
          ? "Error fetching todos: " + err.message
          : "An unexpected error occurred"
      );
    }
  };

  const handleToggleComplete = async (_id: string) => {
    try {
      const taskToUpdate = tasks.find((task) => task._id === _id);
      if (!taskToUpdate) return;

      await api.put(`/todo/tasks/update/${_id}`, {
        isComplete: !taskToUpdate.isComplete,
      });

      await getTasks();
    } catch (err) {
      setError(
        err instanceof Error
          ? "Error toggling complete: " + err.message
          : "An unexpected error occurred"
      );
    }
  };

  const handleDeleteTodo = async (_id: string) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/todo/tasks/delete/${_id}`);
      await getTasks();
    } catch (err) {
      setError(
        err instanceof Error
          ? "Error deleting todo: " + err.message
          : "An unexpected error occurred"
      );
    }
  };

  const logoutUser = () => {
    sessionStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Wrapper>
      <Header>
        <h1>{user.name}'s TodoList</h1>
        <button onClick={logoutUser}>Logout</button>
      </Header>
      <InputWrapper>
        <InputBox
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Create a new task`}
        />
        <AddButton onClick={handleAddTodo}>Save</AddButton>
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <TodoBoard
        tasks={tasks}
        editingId={editingId}
        editingValue={editingValue}
        onEdit={handleEditTodo}
        onChangeEditValue={setEditingValue}
        onSaveEdit={handleSaveEdit}
        onToggle={handleToggleComplete}
        onDelete={handleDeleteTodo}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  h1 {
  }

  button {
    border-radius: 8px;
    border: 1px solid black;
    padding: 0.2rem 0.6rem;
    font-size: 1rem;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
  height: 2.8rem;
`;

const InputBox = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background: #9aa6b2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #707881;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
`;
