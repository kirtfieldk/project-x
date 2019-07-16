import axios from "axios";
// ALL ACTIONS NEEDED
export const fetchImgs = () => async dispatch => {
  const response = await axios.get("/fetchimg");
  dispatch({ type: "FETCH_IMG", payload: response.data });
};
// Blogpost types
export const fetchBlogpost = () => async dispatch => {
  const response = await axios.get("/blogpost");
  dispatch({ type: "FETCH_BLOGPOST", payload: response.data });
};

export const selectBlogpost = value => async dispatch => {
  const response = await axios.get(`/blogpost/${value}`);
  dispatch({ type: "SELECTED_BLOGPOST", payload: response.data });
};
export const addBlogpost = value => async dispatch => {
  const response = await axios.post("/blogpost", value);
  dispatch({ type: "FETCH_BLOGPOST", payload: response.data });
};

export const deleteBlogPost = value => async dispatch => {
  const response = await axios.delete(`/blogpost/delete/${value}`);
  dispatch({ type: "DELETE_BLOGPOST", payload: response.data });
};

// Outsource types
export const fetchOutsource = () => async dispatch => {
  const response = await axios.get("/outsourcelinks");
  dispatch({ type: "FETCH_OUTSOURCE", payload: response.data });
};

export const addOutsource = value => async dispatch => {
  const response = await axios.post("/outsourcelinks", value);
  dispatch({ type: "ADD_OUTSOURCE", payload: response.data });
};

export const deleteOutsource = value => async dispatch => {
  const response = await axios.delete(`/outsourcelinks/${value}`);
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
export const logIn = value => async dispatch => {
  const response = await axios.post("/login", value);
  localStorage.setItem(`adminToken`, `Bearer ${response.data.token}`);

  dispatch({ type: "LOGIN", payload: response.data });
};
// Newsletter
export const SubmitNewsletter = value => async dispatch => {
  const response = await axios.post("/newsletter", value);
  dispatch({ type: "NEWSLETTER", payload: response.data });
};
export const deleteNewsLetter = value => async dispatch => {
  const response = await axios.delete(`/newsletter/${value}`);
  dispatch({ type: "DELETE_NEWSLETTER", payload: response.data });
};
