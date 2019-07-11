export default function(state = false, action) {
  switch (action.payload) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
}

//   TODO complete
