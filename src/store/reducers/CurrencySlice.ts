import {ICurrency} from "../../models/ICurrency";
import {createSlice} from "@reduxjs/toolkit";

interface CurrencyState {
  users: ICurrency[],
  isLoading: boolean,
  error: string,
}

const initialState: CurrencyState = {
  users: [],
  isLoading: false,
  error: ''
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {

  },
  extraReducers: {}
})

export default currencySlice.reducer;
