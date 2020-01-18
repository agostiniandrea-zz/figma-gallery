interface PageInterface {
  id: number,
  icon: string,
  imagesTitle: string,
  title: string,
}

interface PagesState {
  active: number,
  list: PageInterface[]
}

const initialState: PagesState = {
  active: 0,
  list: [
    {
      id: 0,
      icon: "search",
      imagesTitle: "Daily Pictures",
      title: "Search"
    },
    {
      id: 1,
      icon: "favourites",
      imagesTitle: "Favorites",
      title: "Favourites"
    },
  ]
}

export default function (state: PagesState = initialState, action: any) {
  switch (action.type) {
    case "SET_PAGE":
      return setPage(state, action.payload.id);
    default:
      return state;
  }
};

function setPage(state: PagesState, id: number) {
  return Object.assign({}, state, {
    active: id
  });
}