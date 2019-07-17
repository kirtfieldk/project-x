export default function(state = null, action) {
  switch (action.type) {
    case "SUBMIT_NEWSLETTER":
      return action.payload;
    default:
      return state;
  }
}
