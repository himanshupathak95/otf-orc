import React, { useState } from "react";
import RadialProgressBar from "./RadialProgressBar";
import Alternatives from "./Alternatives";
import Paragraphs from "./Paragraphs";
import DragAndDropArea from "./DragAndDropArea";

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

    uploadFile(file);
    setFileUploaded(true);
    setShowInstructions(false);
    setIsLoading(true);
  };

  function uploadFile(file) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      const fileRes = btoa(reader.result);
      console.log(`data:image/jpg;base64,${fileRes}`);
      setPreview(`data:image/jpg;base64,${fileRes}`);

      const formData = new FormData();
      console.log(file);
      formData.append("file", file);

      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setResponseData(data.data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    reader.onerror = () => {
      console.log("There is a problem while uploading...");
    };
  }

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
