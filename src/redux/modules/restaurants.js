const initialState = {
  restaurants: [],
  restaurant: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_RESTAURANTS":
      return { ...state, restaurants: action.payload };
    case "CHANGE_RESTAURANT":
      return { ...state, restaurant: action.payload };
    default:
      return state;
  }
};

export function setRestaurants(restaurants) {
  return {
    type: "CHANGE_RESTAURANTS",
    payload: restaurants
  }
}

export function setRestaurant(restaurant) {
  return {
    type: "CHANGE_RESTAURANT",
    payload: restaurant
  }
}

export default reducer;
