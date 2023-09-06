import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  console.log(coinId);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
