import { AppDispatch } from "../app/store";
import { updateCrypto } from "../features/crypto/cryptoSlice";  
import { CryptoData } from "../types/cryptoTypes";

export function startMockUpdates(dispatch: AppDispatch, cryptoList: CryptoData[]) {
  setInterval(() => {
    const randomCoin = cryptoList[Math.floor(Math.random() * cryptoList.length)];
    if (!randomCoin) return;

    const sparklineData = Array.from({ length: 7 }, () => +(Math.random() * 50000).toFixed(2));
    const newData = {
      price: +(Math.random() * 50000).toFixed(2),
      percent_change_1h: +(Math.random() * 10 - 5).toFixed(2),
      percent_change_24h: +(Math.random() * 10 - 5).toFixed(2),
      percent_change_7d: +(Math.random() * 10 - 5).toFixed(2),
      volume_24h: Math.floor(Math.random() * 1e10),
      sparkline: sparklineData,  
    };

    dispatch(updateCrypto({ id: randomCoin.id, newData }));
  }, 5000);
}
