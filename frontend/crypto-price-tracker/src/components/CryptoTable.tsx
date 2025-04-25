import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { CryptoData } from "../types/cryptoTypes";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoTable: React.FC = () => {
  const cryptoList = useSelector((state: RootState) => state.crypto);

  const formatNumber = (num: number | string) =>
    typeof num === "number"
      ? num.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : parseFloat(num).toLocaleString(undefined, { maximumFractionDigits: 2 });

  const renderChange = (value: number | string) => {
    const numberValue = typeof value === "string" ? parseFloat(value) : value;
    const isPositive = numberValue >= 0;
    return (
      <span className={`flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {isPositive ? "▲" : "▼"} {Math.abs(numberValue).toFixed(2)}%
      </span>
    );
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full min-w-[1100px] table-auto border-separate border-spacing-y-2">
        <thead className="text-left text-xs md:text-sm text-gray-500">
          <tr>
            <th className="pl-4">#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptoList.map((coin: CryptoData, index: number) => {
            // Directly use the sparkline array if it's already an array of numbers
            const sparklineData = Array.isArray(coin.sparkline) ? coin.sparkline : [];

            return (
              <tr
                key={coin.id}
                className="bg-white hover:bg-gray-100 transition-all text-sm md:text-base shadow-sm rounded-lg"
              >
                <td className="pl-4 py-3">{index + 1}</td>
                <td className="py-3 flex items-center gap-3">
                  <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
                  <div className="flex flex-col md:flex-row md:items-center gap-1">
                    <span className="font-semibold">{coin.name}</span>
                    <span className="text-gray-400 uppercase text-xs md:ml-1">{coin.symbol}</span>
                  </div>
                </td>
                <td className="py-3 font-medium text-red-500">${formatNumber(coin.price)}</td>
                <td className="py-3">{renderChange(coin.percent_change_1h)}</td>
                <td className="py-3">{renderChange(coin.percent_change_24h)}</td>
                <td className="py-3">{renderChange(coin.percent_change_7d)}</td>
                <td className="py-3">${formatNumber(coin.market_cap)}</td>
                <td className="py-3">
                  ${formatNumber(coin.volume_24h)}
                  <div className="text-xs text-gray-400">{formatNumber(coin.volume_base)} {coin.symbol}</div>
                </td>
                <td className="py-3">
                  {formatNumber(coin.circulating_supply)} {coin.symbol}
                  <div className="w-full h-1 bg-gray-200 mt-1 rounded">
                    <div className="h-1 bg-blue-400 rounded w-[60%]" />
                  </div>
                </td>
                <td className="py-3">
                  {sparklineData.length > 0 ? (
                    <Sparklines data={sparklineData} width={100} height={20}>
                      <SparklinesLine color="green" />
                    </Sparklines>
                  ) : (
                    <Sparklines data={[0, 0, 0, 0, 0, 0, 0]} width={100} height={20}>
                      <SparklinesLine color="gray" />
                    </Sparklines>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
