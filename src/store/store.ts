import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currencyReducer from './reducers/CurrencySlice'

const rootReducer = combineReducers({
  currencyReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']