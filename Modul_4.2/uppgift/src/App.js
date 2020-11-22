import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Layout/Header.js";
import Results from "./components/Results.js";
import Message from "./components/Message.js";
import Gallery from "./components/Gallery.js";
import "./App.css";

class App extends React.Component {
  state = {
    //For the searchbar
    isEmpty: false,
    //This is needed in order for the app to properly update the gallery
    galleryToggle: false,
    results: [],
    gallery: [],
  };
  //Displays the gallery when the show gallerybutton is pressed
  showGallery = () => {
    const galleryDiv = document.querySelector(".gallery");
    galleryDiv.classList.add("visible");
    this.setState({ galleryToggle: true });
  };
  //Removes the gallery when a clickevent occurs outside of the Gallery
  closeGallery = (e) => {
    if (e.target.classList.contains("visible")) {
      e.target.classList.remove("visible");
      this.setState({ galleryToggle: false });
    }
  };
  //Handels the removal of Gallery images
  removeFromGallery = (number) => {
    this.state.gallery.splice(number, 1);
    //Updates the program
    this.setState({ galleryToggle: false });
    this.setState({ galleryToggle: true });
  };
  //Feches the images from flickr
  getImages = (search) => {
    if (search === "") {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ isEmpty: false });
      this.setState({ results: [], id: [] });
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1&text=${search}`
      )
        .then((res) => res.json())
        .then((json) => {
          const resultString = json.photos.photo.reduce((prev, image) => {
            const srcUrl = this.getImageUrl(
              image.farm,
              image.server,
              image.id,
              image.secret
            );
            return `${prev}${srcUrl}|`;
          }, "");
          this.setState({ results: resultString.split("|") });
        });
    }
  };
  //Creates a URL to the images
  getImageUrl(farmId, serverId, id, secret) {
    return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_m.jpg`;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/Modul_4.2/uppgift/build/index.html"
            render={(props) => (
              <React.Fragment>
                <Header
                  getImages={this.getImages}
                  gallery={this.state.gallery}
                  showGallery={this.showGallery}
                />
                <Message empty={this.state.isEmpty} />
                <Results state={this.state} />
                <Gallery
                  gallery={this.state.gallery}
                  galleryToggle={this.state.galleryToggle}
                  closeGallery={this.closeGallery}
                  removeFromGallery={this.removeFromGallery}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
