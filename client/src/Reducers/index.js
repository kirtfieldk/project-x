import { combineReducers } from "redux";
// import actions
import podcastList from "./podcastList"
import blogpostList from "./blogPostList"
import selectBlogpost from "./selectBlogpost"
import signIn from "./signin"
import imageList from "./imageList"
import selectedImg from "./selectedImg"
import listLinkRead from "./listLinkRead"


export default combineReducers({
  podcastList,
  blogpostList,
  selectBlogpost,
  signIn,
  imageList,
  selectedImg,
  listLinkRead,
});
