import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 랜더링할 때마다 실행
  console.log("I run all the time");
  /*
    useEffect
    - 1번째 인자(argument)는 실행함수
    - 2번째 인자(argument)는 실행조건
    - []안에 변수들이 변경될 때만 실행 한다.
  */

  // 처음 랜더링 할 때만 실행
  useEffect(() => console.log("CALL THE API.."), []);
  // keyword가 변경될 때마다 실행
  useEffect(() => console.log("I run when 'keyword' changes"), [keyword]);
  // counter가 변경될 때마다 실행
  useEffect(() => console.log("I run when 'counter' changes."), [counter]);
  // keyword와 couter가 변경될 때마다 실행
  useEffect(
    () => console.log("I run when keyword or counter changes"),
    [keyword, counter]
  );

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
