export interface StationProperties {
    stationId: string;
    name: string;
    dateObserved: string;
    temperature: number;
    relativeHumidity: number;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Features {
    type: string;
    geometry: Geometry
    properties: StationProperties
}

export interface StationLocationsResponse {
    type: string;
    features: Features[]
}