export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_OUTSOURCE":
      return action.payload;
    default:
      return state;
  }
}
