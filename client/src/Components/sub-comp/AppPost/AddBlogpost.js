// import React from "react";

// const AddBlogpost = () => {
//   // Needed states
//   const [desc, setDesc] = useState("");
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [author, setAuthor] = useState("");
//   const [touched, setTouch] = useState(false);
//   const [invalid, setInvalid] = useState("");
//   // ///////////////////////////////////////////////////////////////////////////////////////////
//   const renderForm = () => {
//     return (
//       <form>
//         <div className="red text-small">{invalid}</div>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={e => setTitle(e.target.value)}
//             aria-describedby="emailHelp"
//             placeholder="Title"
//           />
//           <small className="form-text text-muted">We need a title</small>
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={e => setDesc(e.target.value)}
//             placeholder="Short Desc"
//           />
//         </div>
//         <div className="form-group">
//           <label>Author</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={e => setAuthor(e.target.value)}
//             placeholder="Author"
//           />
//         </div>
//         <div className="form-group">
//           <label>Link</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={e => setLink(e.target.value)}
//             placeholder="Link"
//           />
//         </div>
//         <div className="form-group">
//           <label>ThumbNail</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={e => setImageUrl(e.target.value)}
//             placeholder="Thumb Nail"
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={e => {
//             setInvalid("");
//             e.preventDefault();
//             validateForm();
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     );
//   };
//   return <div className="ml-3 mt-3 pb-5">{renderForm()}</div>;
// };

// export default AddBlogpost;
