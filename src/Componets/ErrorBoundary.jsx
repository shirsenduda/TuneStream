/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: "",
  };
  static getDerivedStateFromError(error) {
    return {
      error: error,
    };
  }

  componentDidCatch(error, info) {
    console.log("error is :", error);
    console.log("error is :", info);
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>Some Error Occured...</h2>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
