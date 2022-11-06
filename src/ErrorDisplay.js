import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorTest from "./ErrorTest";

class ErrorDisplay extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ErrorTest />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ErrorDisplay;
