import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// attrs() 추가하여 컴포넌트에 속성(attribute)을 추가할 수 있다.
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  // 컴포넌트에 as를 사용하면 요소(element)를 변경할 수 있다.
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
