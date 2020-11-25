import React from "react";
import FileUpload from "./FileUploader.js"

function PostModal(){
    return (
        <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
     Make a Post!
    </button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of your hobby"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Image</label>
                    <FileUpload/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Cost</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the cost of your project"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Choose a Category</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Cooking</option>
                    <option>Exercise</option>
                    <option>Art</option>
                    <option>Entertainment</option>
                    <option>Games</option>
                    <option>Home Improvement</option>
                    <option>Outdoors</option>
                    <option>Thrill Seeking</option>
                    <option>Music</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Post!</button>
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