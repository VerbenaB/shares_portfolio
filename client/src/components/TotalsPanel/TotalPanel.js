import React from "react";

import TotalTrends from "./TotalTrends";
import TotalValue from "./TotalValue";

const TotalPanel = ({ allInfo}) => {
  return (
    <>
      <TotalTrends />
      <TotalValue allInfo={allInfo} />
    </>
  );
};

export default TotalPanel;
