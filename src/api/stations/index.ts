import {api} from '../axios'
import {StationLocationsResponse, Features} from './types'

export async function getStationLocations(): Promise<Features[]>  {
    const {data} = await api.get<StationLocationsResponse>('/stations')
    return data.features;
  }