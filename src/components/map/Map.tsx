import React from 'react';
import { GoogleMap, useLoadScript, Marker, LoadScriptProps } from '@react-google-maps/api';
import {MapProps} from './types'

const libraries: LoadScriptProps['libraries'] = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

export function Map(props: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA0J-KoaoMvp-3CcOutaPxpFZaRn84vMPo',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={props.location || center}
      >
        {props.location && <Marker position={props.location} />}
      </GoogleMap>
    </div>
  );
};

export default Map;