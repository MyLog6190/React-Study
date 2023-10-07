import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atmos";

const ToDoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50vw;
`;

const CategoryButton = styled.button`
  margin: 3px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  &:hover {
    background-color: #45a049;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(Categories);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = () => {
    setToDos((toDos) => {
      const index = toDos.findIndex((toDo) => toDo.id === id);
      console.log(toDos);
      console.log(id);
      console.log(index);
      return [...toDos.slice(0, index), ...toDos.slice(index + 1)];
    });
  };

  return (
    <ToDoItem>
      <span>{text}</span>
      <div>
        {categories
          .filter((prop) => category !== prop)
          .map((item) => (
            <CategoryButton key={item} onClick={onClick} name={item}>
              {item}
            </CategoryButton>
          ))}
        <CategoryButton onClick={deleteToDo}>Delete</CategoryButton>
      </div>
    </ToDoItem>
  );
}

export default ToDo;
