import React, { useEffect, useState } from "react";
import TodoBoard from "../components/TodoBoard";
import api from "../utils/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Navigate } from "react-router-dom";

const TodoPage = ({ user, setUser }) => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // getTasks
  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
  };

  // addTodo
  const addTodo = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });

      if (response.status === 200) {
        getTasks();
      }

      setTodoValue("");
    } catch (error) {
      console.log("error:", error);
    }
  };

  // deleteItem
  const deleteItem = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // toggleComplete
  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });

      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // handleLogout
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    Navigate("/login");
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <div onClick={handleLogout} className="logoutBtn">
        로그아웃
      </div>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            onChange={(event) => setTodoValue(event.target.value)}
            className="input-box"
            value={todoValue}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button onClick={addTodo} className="button-add">
            추가
          </button>
        </Col>
      </Row>

      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </Container>
  );
};

export default TodoPage;
