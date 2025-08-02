// TodoBoard.tsx
import React from "react";
import styled from "styled-components";
import { Task } from "../utils/types";

interface TodoBoardProps {
  tasks: Task[];
  editingId: string | null;
  editingValue: string;
  onEdit: (id: string, task: string) => void;
  onChangeEditValue: (value: string) => void;
  onSaveEdit: (id: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoBoard: React.FC<TodoBoardProps> = ({
  tasks,
  editingId,
  editingValue,
  onEdit,
  onChangeEditValue,
  onSaveEdit,
  onToggle,
  onDelete,
}) => {
  if (!Array.isArray(tasks) || tasks.length === 0)
    return <p>할 일이 없습니다!</p>;

  return (
    <TodoList>
      {tasks.map((item) => (
        <TodoItem key={item._id} isComplete={item.isComplete}>
          <ContentWrapper>
            <TodoCheckbox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggle(item._id)}
            />
            {editingId === item._id ? (
              <TodoEditInput
                type="text"
                value={editingValue}
                onChange={(e) => onChangeEditValue(e.target.value)}
                onBlur={() => editingValue && onSaveEdit(item._id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && editingValue) onSaveEdit(item._id);
                }}
                autoFocus
              />
            ) : (
              <TodoText
                $isComplete={item.isComplete}
                onClick={() => onToggle(item._id)} // 텍스트 클릭도 토글
              >
                {item.task}
              </TodoText>
            )}
          </ContentWrapper>
          <ButtonGroup>
            <Button onClick={() => onEdit(item._id, item.task)}>수정</Button>
            <Button onClick={() => onDelete(item._id)}>삭제</Button>
          </ButtonGroup>
        </TodoItem>
      ))}
    </TodoList>
  );
};

export default TodoBoard;

const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  max-height: 72vh;
  overflow-y: auto;
`;

const TodoItem = styled.div<{ isComplete?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${(props) => (props.isComplete ? "#f5f5f5" : "white")};
  opacity: ${(props) => (props.isComplete ? 0.7 : 1)};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const TodoCheckbox = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: #5c8aff;
`;

const TodoText = styled.span<{ $isComplete?: boolean }>`
  flex: 1;
  cursor: pointer;
  text-decoration: ${(props) => (props.$isComplete ? "line-through" : "none")};
  color: ${(props) => (props.$isComplete ? "#888" : "#333")};
`;

const TodoEditInput = styled.input`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const Button = styled.button`
  font-size: 0.8rem;
  padding: 4px 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
