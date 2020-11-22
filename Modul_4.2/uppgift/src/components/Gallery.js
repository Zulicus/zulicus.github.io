import React, { Component } from "react";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem.js";
//This is where the imgaes saved to Gallery is handeled
class Gallery extends Component {
  state = {
    number: 0,
    gallery: this.props.gallery,
  };
  //Handles the Left Gallery controll button
  countDown = () => {
    if (this.state.number === 0) {
      return;
    } else {
      this.setState({ number: this.state.number - 1 });
    }
  };
  //Handles the Right Gallery controll button
  countUp = () => {
    if (this.state.number >= this.props.gallery.length - 1) {
      return;
    } else {
      this.setState({ number: this.state.number + 1 });
    }
  };
  render() {
    //Checks so that the number variable does not exed the maximum number allowed after a removal of a Gallery image
    if (
      this.state.number >= this.props.gallery.length &&
      this.state.number !== 0
    ) {
      this.setState({ number: this.state.number - 1 });
    }
    return (
      <div onClick={this.props.closeGallery} className="gallery">
        <div className="gallery__content">
          <div className="gallery__controls">
            <button onClick={this.countDown} className="gallery__control-left">
              {"<"}
            </button>
            <button onClick={this.countUp} className="gallery__control-right">
              {">"}
            </button>
          </div>
          <ul className="gallery__list">
            {
              <GalleryItem
                image={this.state.gallery[this.state.number]}
                number={this.state.number}
                removeFromGallery={this.props.removeFromGallery}
              />
            }
          </ul>
        </div>
      </div>
    );
  }
}
// Prop Types
Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  galleryToggle: PropTypes.bool.isRequired,
  closeGallery: PropTypes.func.isRequired,
  removeFromGallery: PropTypes.func.isRequired,
};
export default Gallery;
