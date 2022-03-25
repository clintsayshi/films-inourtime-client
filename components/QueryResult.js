import React from "react";

function QueryResult(props) {
  const { loading, error, data, children } = props;

  if (loading) {
    return (
      <div className="flex flex-col item-center">
        <h1 className="text-2xl font-medium">Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col item-center">
        <h1 className="text-2xl font-medium">ERROR...</h1>
      </div>
    );
  }

  return <div>{children}</div>;
}

export default QueryResult;
