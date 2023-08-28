import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // useState를 사용하면 직접적으로 state을 변경할 수 없다
    // 변경할려면 반드시 2번째 인자(argument)에 지정한 함수를 써야한다
    // ex) toDo = "toDo" -> 안됨
    console.log(toDos);
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
    // array [1, 2, 3, 4]
    // array2 [5, array] -> [5, array[3]]
    // array3 [5, ...array] ->  [5, 1, 2, 3, 4]
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  // map함수는 array의 구성을 변경하는데 사용한다
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
