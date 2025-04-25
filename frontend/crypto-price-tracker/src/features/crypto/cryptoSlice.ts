import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sampleData from './sampleData.json'
import { CryptoData } from "../../types/cryptoTypes";


const initialState: CryptoData[] = sampleData as CryptoData[];

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
       updateCrypto: (
        state,
        action: PayloadAction<{id: string; newData: Partial<CryptoData> }> ) => {
            const { id, newData } = action.payload;
            const index = state.findIndex((item) => item.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...newData };
            }
        },
    },
})

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;