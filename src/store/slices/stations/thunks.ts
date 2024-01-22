import { createAsyncThunk } from '@reduxjs/toolkit';
import {getStationLocations} from '../../../api/stations'
import {SearchOptions} from './types'


export const getStationsThunk = createAsyncThunk(
    'stations/fetch',
    async (_, thunkAPI): Promise<SearchOptions[]> => {
      const response = await getStationLocations();
      // The value we return becomes the `fulfilled` action payload
      return response.map(item => ({
        title: item.properties.name,
        value: {
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0]
        }
      }));
    }
  );