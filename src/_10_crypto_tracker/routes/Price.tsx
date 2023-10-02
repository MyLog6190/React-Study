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
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const PriceInfo = styled.span`
  font-weight: bold;
  text-align: center;
  color: #8f7fe6;
`;

const ShowPrice = styled.span`
  text-align: center;
`;

function Price() {
  const { coinId } = useOutletContext<ChartProps>();
  const { data } = useQuery<IHistorical[]>(["ohlc", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const date = new Date();
  const revese = data?.reverse();

  return (
    <Wrapper>
      <PriceInfo>Date</PriceInfo>
      <PriceInfo>Open Price</PriceInfo>
      <PriceInfo>Low Price</PriceInfo>
      <PriceInfo>high Price</PriceInfo>
      <PriceInfo>Close Price</PriceInfo>
      {revese?.map((price, index) => {
        return (
          <>
            <ShowPrice>
              {date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                (date.getDate() - index)}
            </ShowPrice>
            <ShowPrice>{price.open}</ShowPrice>
            <ShowPrice>{price.low}</ShowPrice>
            <ShowPrice>{price.high}</ShowPrice>
            <ShowPrice>{price.close}</ShowPrice>
          </>
        );
      })}
    </Wrapper>
  );
}

export default Price;
