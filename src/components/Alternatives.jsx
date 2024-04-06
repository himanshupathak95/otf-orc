import React from "react";
import { ListSkeleton } from "./Skeleton";

const getAlternatives = (responseData) =>
  responseData
    .substring(responseData.indexOf("*"), responseData.length)
    .split(".\n");

const Alternatives = ({ responseData, isLoading }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="outline outline-1 outline-white/20 outline-offset-4 rounded-3xl p-4 flex-1 ml-3 mt-3">
        {isLoading && <ListSkeleton />}
        {responseData && !isLoading && (
          <>
            <h4 className="flex h4 text-centre items-center justify-center pt-10">
              Alternatives Choices
            </h4>
            {getAlternatives(responseData).map((line, index) => (
              <p
                key={index}
                className={`p-2 ${
                  index === 0 ? "pt-5" : "pt-0"
                } pl-15 pr-15 text-centre`}
              >
                {line}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Alternatives;
