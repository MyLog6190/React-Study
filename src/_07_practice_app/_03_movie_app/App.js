import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

/*
  react-router-dom
  - 컴포넌트(component) 모음

  Routers
  - 하나의 Route만 랜더링하기 위해서 사용

*/
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          element={<Detail />}
        />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
