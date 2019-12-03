import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const renderLoader = state => {
  return state.loading ? (
    <MoonLoader
      sizeUnit={"px"}
      size={60}
      color={"#2b9abf"}
      loading={state.loading}
    />
  ) : null;
};

export default renderLoader;
