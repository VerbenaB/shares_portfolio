import React from "react";
import ShareCard from "./ShareCard";

const SharesList = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const shareNodes = allInfo.map(() => {
    return <ShareCard allInfo={allInfo} />
  });

  return <>{shareNodes}</>;
};

export default SharesList;
