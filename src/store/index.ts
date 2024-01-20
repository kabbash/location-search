import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stationsReducer from './slices/stations/stationsSlice';

export const store = configureStore({
  reducer: {
    stations: stationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
