
import React, { Component } from 'react';
import LPicker from "./LPicker";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  padding:"10px"
};


class Index extends Component {
  render() {
    return (
      <div style={styles}>
      <LPicker />
    </div>
    );
  }
}



export default Index;
