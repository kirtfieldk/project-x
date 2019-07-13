import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import actions
import podcastList from "./podcastList";
import blogpostList from "./blogPostList";
import selectBlogpost from "./selectBlogpost";
import signIn from "./signin";
import imageList from "./imageList";
import selectedImg from "./selectedImg";
import listLinkRead from "./listLinkRead";
import newsletter from "./newsletter";

export default combineReducers({
  podcastList,
  blogpostList,
  selectBlogpost,
  signIn,
  imageList,
  selectedImg,
  listLinkRead,
  newsletter,
  form: formReducer
});
