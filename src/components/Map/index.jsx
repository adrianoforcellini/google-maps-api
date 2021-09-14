import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
  const {google} = props;
  return <Map google={google}/>
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUYC0-Ep-52DVi9mSbQCJRrJJb9Cy6wGs",
  language: "pt-BR",
})(MapContainer)