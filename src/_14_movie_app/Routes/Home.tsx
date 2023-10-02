import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;
const Bener = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: red;
  background-image: url(${(prop) => prop.image});
  background-size: cover;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data, isLoading);

  const IMAGE_URL =
    "https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg";

  return (
    <Wrapper>
      <>
        <Bener image={IMAGE_URL}>1</Bener>
      </>
    </Wrapper>
  );
}
export default Home;
