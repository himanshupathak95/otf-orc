import React from "react";
import { TextSkeleton } from "./Skeleton";

const getParagraphs = (responseData) =>
  responseData
    ? responseData.substring(0, responseData.indexOf("Here")).split("\n")
    : "";

const Paragraphs = ({ showInstructions, responseData, isLoading }) => {
  return (
    <div className="ml-3 text-white transition-opacity duration-300 outline outline-1 outline-white/20 outline-offset-4 rounded-3xl items-centre">
      {showInstructions && (
        <p className="flex items-center justify-center h-full text-center">
          Instructions: Drag and drop your image here...
        </p>
      )}
      {isLoading && (
        <>
          <TextSkeleton />
          <TextSkeleton />
        </>
      )}
      {!showInstructions && !isLoading && responseData && (
        <div className="flex flex-col  justify-center items-center ">
          {getParagraphs(responseData).map((line, index) =>
            index === 0 ? (
              <p key={index} className="p-2 pt-8 pl-15 pr-15 text-centre">
                {line}
              </p>
            ) : (
              <p key={index} className="p-2 pt-0 pl-15 pr-15 text-centre">
                {line}
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Paragraphs;
