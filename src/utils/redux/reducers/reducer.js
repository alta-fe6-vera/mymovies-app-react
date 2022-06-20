const initialState = {
  favourites: [],
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVOURITES":
      return {
        favourites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
