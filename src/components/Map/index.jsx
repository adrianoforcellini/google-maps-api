import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
  const [map, setMap] = useState('map');
  const {google, query} = props;
  
  useEffect (() => {
    querySearch(query)
  }, [query])

const querySearch = (query) => {
  const service = new google.maps.places.PlacesService(map);
  const request = {
    location: map.center,
    radius: '200',
    type: ['restaurant'],
    query,
  };
  
  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
    }
  })

}
  const search = (map, center) => {
  const service = new google.maps.places.PlacesService(map);
  const request = {
    location: center,
    radius: '20000',
    type: ['restaurant'],
  };
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results)
    }
  })
}

const onMapReady = (_, map) => {
  setMap(map);
  search(map, map.center);
}

  return (
    <Map
    google={google} 
    centerAroundCurrentLocation
    onReady= {onMapReady}
    onRecenter={onMapReady}
    />
    )
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUYC0-Ep-52DVi9mSbQCJRrJJb9Cy6wGs",
  language: "pt-BR",
})(MapContainer)