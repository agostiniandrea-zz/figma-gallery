interface FavouritesState {
  list: string[]
};

const initialState: FavouritesState = {
  list: []
};

export default function (state: FavouritesState = initialState, action: any) {
  switch (action.type) {
    case "ADD_LIKED":
      return addItem(state, action.payload.id);
    case "REMOVE_LIKED":
      return removeItem(state, action.payload.id);
    default:
      return state;
  }
};

function addItem(state: FavouritesState, id: number) {
  return state;
}

function removeItem(state: FavouritesState, id: number) {
  return state;
}