import React, { Suspense } from "react";
import Post from "../post/Post";
const InfoCard = React.lazy(() => import("./InfoCard"));
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const Feed = () => {
  return (
    <>
      <div className="info-card">
        <ErrorBoundary>
          <Suspense fallback={<p>Loading posts...</p>}>
            <InfoCard />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Feed;
