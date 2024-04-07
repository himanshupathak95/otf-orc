import React, { useState } from "react";
import RadialProgressBar from "./RadialProgressBar";
import Alternatives from "./Alternatives";
import Paragraphs from "./Paragraphs";
import DragAndDropArea from "./DragAndDropArea";
import { uploadFile } from "../../uploadFile";

const FileUpload = () => {
  const [highlight, setHighlight] = useState(false);
  const [preview, setPreview] = useState("");
  const [drop, setDrop] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("enter!");
    preview === "" && setHighlight(true);
  };

  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("over!");
    preview === "" && setHighlight(true);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("leave!");
    setHighlight(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drop!");
    setHighlight(false);
    setDrop(true);

    const [file] = e.target.files || e.dataTransfer.files;

    uploadFile(file, setPreview, setResponseData, setIsLoading);
    setFileUploaded(true);
    setShowInstructions(false);
    setIsLoading(true);
  };

  return (
    <>
      <DragAndDropArea
        handleEnter={handleEnter}
        handleLeave={handleLeave}
        handleOver={handleOver}
        handleUpload={handleUpload}
        highlight={highlight}
        drop={drop}
        preview={preview}
        fileUploaded={fileUploaded}
      />
      <Paragraphs
        showInstructions={showInstructions}
        responseData={responseData}
        isLoading={isLoading}
      />
      <RadialProgressBar responseData={responseData} isLoading={isLoading} />
      <Alternatives responseData={responseData} isLoading={isLoading} />
      {console.log(responseData)}
    </>
  );
};

export default FileUpload;
