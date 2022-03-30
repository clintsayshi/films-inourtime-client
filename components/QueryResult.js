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
    console.log(error);
    return (
      <div className="flex flex-col item-center">
        <h1 className="text-2xl font-medium">
          <code>{}</code>
        </h1>
      </div>
    );
  }

  return <div>{children}</div>;
}

export default QueryResult;
