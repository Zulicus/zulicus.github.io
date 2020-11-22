import React, { Component } from "react";
import PropTypes from "prop-types";
//This message only appares when you try to search for nothing
export class Message extends Component {
  render() {
    //Checks so that the searchfield is empty
    if (this.props.empty) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="message">You need to search for something...</div>
        </div>
      );
    } else {
      return <div class="message__container"></div>;
    }
  }
}
// Prop Types
Message.propTypes = {
  empty: PropTypes.bool.isRequired,
};
export default Message;
