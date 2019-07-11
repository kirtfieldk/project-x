import axios from "axios";
// ALL ACTIONS NEEDED
export const fetchImgs = () => async dispatch => {
  const response = await axios.get("/fetchimg");
  dispatch({ type: "FETCH_IMG", payload: response.data });
};
// Blogpost types
export const fetchBlogPost = () => async dispatch => {
  const response = await axios.get("/blogpost");
  dispatch({ type: "FETCH_BLOGPOST", payload: response.data });
};

export const addBlogPost = value => async dispatch => {
  const response = await axios.post("/blogpost", value);
  dispatch({ type: "FETCH_BLOGPOST", payload: response.data });
};

export const deleteBlogPost = value => async dispatch => {
  const response = await axios.delete(`/blogpost/${value}`);
  dispatch({ type: "DELETE_BLOGPOST", payload: response.data });
};

// Outsource types
export const fetchOutsource = () => async dispatch => {
  const response = await axios.get("/outsourcelinks");
  dispatch({ type: "FETCH_OUTSOURCE", payload: response.data() });
};

export const addOutsource = value => async dispatch => {
  const response = await axios.post("/outsourcelinks", value);
  dispatch({ type: "ADD_OUTSOURCE", payload: response.data });
};

export const deleteOutsource = value => async dispatch => {
  const response = await axios.delete(`/blogpost/${value}`);
  dispatch({ type: "DELETE_BLOGPOST", payload: response.data });
};

// PodcastLink

export const fetchPodcast = () => async dispatch => {
  const response = await axios.get("/podcast");
  dispatch({ type: "FETCH_PODCAST", payload: response.data });
};

export const addPodcast = value => async dispatch => {
  const response = await axios.post("/podcast", value);
  dispatch({ type: "ADD_PODCAST", payload: response.data });
};

export const deletePodcast = value => async dispatch => {
  const response = await axios.delete(`/podcast/${value}`);
  dispatch({ type: "DELETE_PODCAST", payload: response.data });
};

// SIGN IN
export const signIn = value => async dispatch => {
  const response = await axios.post("/login", value);
  dispatch({ type: "LOGIN", payload: response.data });
};
