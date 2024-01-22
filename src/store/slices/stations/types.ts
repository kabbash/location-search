export interface SearchOptions {
  title: string;
  value: {lng: number, lat: number}
}
export interface StationsState {
    searchOptions: SearchOptions[]
  }
