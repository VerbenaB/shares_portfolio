import React from "react";
import ShareCard from "./ShareCard";

const SharesList = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const shareNodes = allInfo.map((share, index) => {
    return <ShareCard allInfo={allInfo} index={index}/>
  });

  return <>{shareNodes}</>;
};

export default SharesList;
