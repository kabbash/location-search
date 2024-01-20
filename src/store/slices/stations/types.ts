export interface StationsState {
    stationsList: StationList[];
  }

export interface StationList {
    name: string;
    lat: number;
    long: number;
}

export interface CounterState {}