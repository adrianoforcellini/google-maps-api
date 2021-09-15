import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";

export const MapContainer = (props) => {
  const { google, query, placeId } = props;
  const [map, setMap] = useState("");
  // const [restaurant, setRestaurant] = useState("");

  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    querySearch(query);
  }, [query]);

  useEffect(() => {
    console.log(placeId, 'asssssssssssssssssssssssssss') 
    if(placeId){
      details(placeId)
    }
  }, [placeId]);

  const details = (place) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place)
        dispatch(setRestaurant(place));
      }
    });
  };

  const querySearch = (query) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.center,
      radius: "200",
      type: ["restaurant"],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  const search = (map, center) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  const onMapReady = (_, map) => {
    setMap(map);
    search(map, map.center);
  };

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}
    >
      {restaurants &&
        restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            name={restaurant.name}
            position={{
              lat: restaurant.geometry.location.lat(),
              lng: restaurant.geometry.location.lng(),
            }}
          />
        ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUYC0-Ep-52DVi9mSbQCJRrJJb9Cy6wGs",
  language: "pt-BR",
})(MapContainer);
