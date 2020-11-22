import React, { Component } from "react";
import PropTypes from "prop-types";
//Handled each invividual Gallery image
class GalleryItem extends Component {
  render() {
    //Checks if there are saved images
    if (this.props.image === undefined) {
      return (
        <div>No images found, you need to add something to the gallery...</div>
      );
    } else if (this.props.image !== undefined) {
      return (
        <li className="visible">
          <img src={this.props.image.src} alt="404 - Not found" />
          <div
            className="gallery__X"
            onClick={() => {
              this.props.removeFromGallery(this.props.number);
            }}
          >
            X
          </div>
        </li>
      );
    }
  }
}
// Prop Types
GalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  removeFromGallery: PropTypes.func.isRequired,
};
export default GalleryItem;
