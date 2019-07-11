export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_PODCAST":
      return action.payload;
    default:
      return state;
  }
}
