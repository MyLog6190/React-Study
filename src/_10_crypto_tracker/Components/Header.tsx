import { styled } from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  right: 5px;
`;

function Header() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button onClick={toggleDarkAtom}>Toggle Mode</button>
    </Nav>
  );
}

export default Header;
