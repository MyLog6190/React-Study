import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atmos";
import { motion } from "framer-motion";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import styled from "styled-components";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: bold;
  width: 50vw;
  text-align: center;
`;

const CategoryList = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px;
`;

const CategoryType = styled.span<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 1px solid;
  text-align: center;
  background-color: ${(props) => (props.selected ? "#59656d" : "#2f3640")};
  color: white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#4c565e" : "#1e2329")};
  }

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NewCategory = styled.button`
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
`;

const overlayVariant = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(Categories);
  const changeCategory = (event: React.MouseEvent<HTMLSpanElement>) => {
    setCategory(event.currentTarget.textContent as string);
  };

  const [showing, setShowing] = React.useState(false);
  const showInputCategory = () => {
    setShowing(!showing);
  };

  return (
    <Wapper>
      {showing ? (
        <Overlay
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => {
            setShowing(!showing);
          }}
        >
          <motion.div onClick={(e) => e.stopPropagation()}>
            <CreateCategory />
          </motion.div>
        </Overlay>
      ) : null}
      <Title>To Dos</Title>
      <CategoryList>
        {
          categories?.map((item) => (
            <CategoryType
              selected={category === item}
              onClick={changeCategory}
              key={item}
            >
              {item}
            </CategoryType>
          )) as any
        }
        <NewCategory onClick={showInputCategory}> New </NewCategory>
      </CategoryList>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Wapper>
  );
}

export default ToDoList;
