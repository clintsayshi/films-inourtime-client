import React from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: pink;
`;

function QueryResult(props) {
  const { loading, error, children } = props;

  if (loading) {
    return (
      <div className="h-[80vh] w-screen flex items-center justify-center">
        <BeatLoader
          className="dark:text-red-400"
          color="rgb(190,24,93)"
          loading={loading}
          css={override}
          size={25}
        />
      </div>
    );
  }
  if (error) {
    console.log(error);
    return (
      <div className="flex flex-col item-center">
        <h1 className="text-2xl font-medium">
          <code></code>
        </h1>
      </div>
    );
  }

  return <div>{children}</div>;
}

export default QueryResult;
