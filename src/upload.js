import React, { Component } from "react";

class Upload extends Component {
  render() {
    return (
      <div class="container">
        <form enctype="multipart/form-data" method="post" action="#">
          <div class="row">
            <div class="col-25">
              <label for="fname">Peter</label>
            </div>
            <div class="col-75">
              <input type="text" id="name" name="name" placeholder="John Smith" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">E-mail</label>
            </div>
            <div class="col-75">
              <input type="email" id="emali" name="email" placeholder="hackerman@hackerz.com" />
            </div>
          </div>
          <br/>
          <div class="row">
            <input id="fileupload" name="myfile" type="file" />
          </div>
          <br/>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;