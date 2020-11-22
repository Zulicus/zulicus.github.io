import React, { Component } from "react";
import PropTypes from "prop-types";
//Here is where each individual image is handeled and displayed
export class ResultItem extends Component {
  //Handles the Save to Gallery functionality
  onClick = (e) => {
    if (this.props.gallery.includes(e.target)) {
      return;
    }
    e.target.parentNode.classList.add("selected");
    this.props.gallery.push(e.target);
  };
  render() {
    return (
      <li className="resultLi" onClick={this.onClick}>
        <img
          className="resultImage"
          src={this.props.result}
          alt="404 - Not found"
        />
      </li>
    );
  }
}
// Prop Types
ResultItem.propTypes = {
  result: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired,
};
export default ResultItem;
