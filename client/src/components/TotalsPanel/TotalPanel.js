import React from "react";

import TotalTrends from "./TotalTrends";
import TotalValue from "./TotalValue";

const TotalPanel = ({ allInfo}) => {
  return (
    <>
      <TotalTrends allInfo={allInfo}/>
      <TotalValue allInfo={allInfo} />
    </>
  );
};

export default TotalPanel;
