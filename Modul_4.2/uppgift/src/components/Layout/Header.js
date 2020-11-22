import React, { Component } from "react";
import PropTypes from "prop-types";
//This is where most of the User Interface happens
export class Header extends Component {
  state = {
    title: "",
  };
  //Updates the Title with what is being writen
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  //Hanles search function
  onSubmit = (e) => {
    e.preventDefault();
    this.props.getImages(this.state.title);
    this.setState({ results: "" });
  };
  //Handles the button that brings up the Gallery
  onClick = () => {
    this.props.showGallery();
  };
  render() {
    return (
      <header className="headerStyle">
        <div className="logo" style={{ flexGrow: "1" }}></div>
        <form onSubmit={this.onSubmit} style={searchfieldStyle}>
          <input
            type="text"
            name="title"
            style={searchInputStyle}
            placeholder="Search..."
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="button"
            style={{ margin: "0 10px" }}
          />
        </form>
        <div className="galleryButtonWrapper">
          <button onClick={this.onClick}>Show Gallery</button>
        </div>
      </header>
    );
  }
}
//Syles I feel don't need to be in the css with classes
const searchInputStyle = {
    width: "400px",
    fontSize: "20px",
    padding: "10px",
  },
  searchfieldStyle = {
    display: "flex",
    height: "40px",
    justifyContent: "center",
  };
// Prop Types
Header.propTypes = {
  showGallery: PropTypes.func.isRequired,
  gallery: PropTypes.array.isRequired,
  getImages: PropTypes.func.isRequired,
};
export default Header;
