import React, { Component } from "react";
import ResultItem from "./ResultItem.js";
import PropTypes from "prop-types";
//This is where the immages searched for end up
export class Results extends Component {
  render() {
    return (
      <div className="search_result_container" style={searchResultsStyle}>
        <ul style={searchResultsStyle}>
          {this.props.state.results.map((result) => {
            return (
              <ResultItem gallery={this.props.state.gallery} result={result} />
            );
          })}
        </ul>
      </div>
    );
  }
}
//Syles I feel don't need to be in the css with classes
const searchResultsStyle = {
  display: "flex",
  flexWrap: "wrap",
  listStyleType: "none",
  justifyContent: "space-between",
  padding: "0 40px",
};
// Prop Types
Results.propTypes = {
  results: PropTypes.array.isRequired,
};
export default Results;
