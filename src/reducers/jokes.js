// action types
const ADD_JOKE = "ADD_JOKE";

// reducer with initial state

export  const jokes = (state = [], action) =>{
  switch (action.type) {
    case ADD_JOKE:
      return [...state, {id: action.joke.id, url: action.joke.url, value: action.joke.value, category: action.joke.category, icon: action.joke.icon_url }];
    default:
      return state;
  }
}