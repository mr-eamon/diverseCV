import React, { Component } from "react";
import { uploadFile } from './services/api.service';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      file: null,
      isSubmitted: false,
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);

  }

  handleSubmission(ev) {
    ev.preventDefault();

    const { name, email, file } = this.state;
    uploadFile(name, email, file)
      .then((response) => {
        this.setState({
          isSubmitted: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ isSubmitted: true });
  }

  handleNameInput(ev) {
    this.setState({
      name: ev.target.value,
    });
  }

  handleEmailInput(ev) {
    this.setState({
      email: ev.target.value,
    });
  }

  handleFileInput(ev) {
    this.setState({
      file: ev.target.files[0],
    });
  }

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div class="uploadComplete">
        <br/>
          <img src="https://freepngimg.com/download/green_tick/27894-7-green-tick-transparent-background.png" width="70" height="60"></img>
          <h3>CV Subbmitted Sucessfully</h3>

        </div>
      );
    }

    return (
      <div class="container">
        <form enctype="multipart/form-data" method="post">
          <div class="row">
            <div class="col-25">
              <label for="fname">Peter</label>
            </div>
            <div class="col-75">
              <input type="text" id="name" name="name" placeholder="John Smith" onChange={this.handleNameInput} />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">E-mail</label>
            </div>
            <div class="col-75">
              <input type="email" id="emali" name="email" placeholder="hackerman@hackerz.com" onChange={this.handleEmailInput} />
            </div>
          </div>
          <br />
          <div class="row">
            <input id="fileupload" name="myfile" type="file" onChange={this.handleFileInput} />
          </div>
          <br />
          <div class="row">
            <input type="submit" value="Submit" onClick={this.handleSubmission} />
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;