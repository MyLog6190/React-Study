import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 15px;
  width: 30vw;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #e781e7;
  border-radius: 10px;
`;

const Button = styled.button<{ colorChange: boolean }>`
  margin-top: 30px;
  color: ${(props) => (props.colorChange ? "blue" : "red")};
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          initial={{ originX: 1, originY: 1 }}
          whileHover={{ originX: 1, originY: 1, scale: 1.1 }}
          key="1"
          layoutId="1"
        />
        <Box>{toggle ? <Circle layoutId="circle"></Circle> : null}</Box>
        <Box>{!toggle ? <Circle layoutId="circle"></Circle> : null}</Box>
        <Box
          onClick={() => setId("2")}
          whileHover={{ originX: 0, originY: 0, scale: 1.1 }}
          key="2"
          layoutId="2"
        />
      </Grid>
      <Button
        colorChange={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Switch
      </Button>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ width: 265, height: 150, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
