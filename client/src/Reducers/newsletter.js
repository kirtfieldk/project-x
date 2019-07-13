export default function(state = null, action) {
  switch (action.type) {
    case "NEWSLETTER":
      return action.payload;
    default:
      return state;
  }
}
