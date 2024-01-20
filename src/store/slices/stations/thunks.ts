import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store';
import {getStationLocations} from '../../../api/stations'
import {StationList} from './types'


export const getStationsThunk = createAsyncThunk(
    'stations/fetch',
    async (_, thunkAPI): Promise<StationList[]> => {
      const response = await getStationLocations();
      // The value we return becomes the `fulfilled` action payload
      return response.map(item => ({
        name: item.properties.name,
        lat: item.geometry.coordinates[0],
        long: item.geometry.coordinates[1]
      }));
    }
  );