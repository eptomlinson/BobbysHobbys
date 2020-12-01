import React from "react";
// import FileUpload from "./FileUploader.js"
import categories from "./Modal/categories"
function PostModal(props){

    return (
        <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
     Make a Post!
    </button>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"></h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input onChange={props.onChange} name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of your hobby"/>
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input name="image" onChange={props.onChange} placeholder="input a URL of a photo"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Cost</label>
                    <input onChange={props.onChange} name="cost" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the cost of your project"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea onChange={props.onChange} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Choose a Category</label>
                    <select onChange={props.onChange} name="category" className="form-control" id="exampleFormControlSelect1">
                    {categories.map(category => (
                    <option value={categories.id}>{category.id}</option>
                    ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.submitPost}>Post!</button>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default PostModal;