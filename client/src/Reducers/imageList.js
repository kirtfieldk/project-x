export default function(state = [], action) {
    switch (action.payload) {
      case "FETCH_IMAGES":
        return action.payload;
      default:
        return state;
    }
  }
  
  //   TODO complete
  