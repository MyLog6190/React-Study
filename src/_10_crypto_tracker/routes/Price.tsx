import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";
import { styled } from "styled-components";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const PriceInfo = styled.span`
  font-weight: bold;
`;

const ShowPrice = styled.span``;

function Price() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlc", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <Wrapper>
      <PriceInfo>시작가</PriceInfo>
      <PriceInfo>최고가</PriceInfo>
      <PriceInfo>최저가</PriceInfo>
      <PriceInfo>종가</PriceInfo>
      {data?.map((price) => {
        return (
          <>
            <ShowPrice>open:{price.open}</ShowPrice>
            <ShowPrice>high:{price.high}</ShowPrice>
            <ShowPrice>low:{price.low}</ShowPrice>
            <ShowPrice>close:{price.close}</ShowPrice>
          </>
        );
      })}
    </Wrapper>
  );
}

export default Price;
