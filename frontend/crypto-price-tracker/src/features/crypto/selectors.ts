import { RootState } from '../../app/store';
import { CryptoData } from '../../types/cryptoTypes';


export const selectCryptoList = (state: RootState): CryptoData[] => state.crypto;


export const selectCryptoById = (id: string) => (state: RootState): CryptoData | undefined =>
  state.crypto.find((coin: CryptoData) => coin.id === id); 
