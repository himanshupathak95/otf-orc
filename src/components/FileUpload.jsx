import React, { useState } from "react";
import RadialProgressBar from "./RadialProgressBar";

const getParagraphs = (responseData) =>
  responseData.substring(0, responseData.indexOf("Here")).split("\n");

const getAlternatives = (responseData) =>
  responseData
    .substring(responseData.indexOf("*"), responseData.length)
    .split(".\n");

const getRating = (responseData) => responseData.match(/\d/)[0] || 7;

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
      <div
        onDragEnter={(e) => handleEnter(e)}
        onDragLeave={(e) => handleLeave(e)}
        onDragOver={(e) => handleOver(e)}
        onDrop={(e) => handleUpload(e)}
        className={`flex items-center justify-center w-98 h-[75vh] text-white  bg-transparent rounded-3xl relative overflow-hidden outline outline-1 outline-white/20 outline-offset-4
                  ${highlight ? "bg-blue-500/50" : ""} 
                  ${drop ? "opacity-70" : ""}`}
      >
        {preview && (
          <img
            src={preview}
            alt="Uploaded preview"
            className="absolute inset-0 object-cover w-full h-full"
          />
        )}
        <form className="form">
          <p className={`text-sm text-white ${drop ? "opacity-0" : ""}`}>
            Drag and Drop image here
          </p>
          <div className="upload-button-wrap absolute bottom-0 left-0 w-52">
            <input
              type="file"
              className="opacity-0 w-full h-full absolute bottom-0 left-0 cursor-pointer"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
            {!fileUploaded && (
              <button className="flex items-center justify-center mt-2 w-full h-12 text-sm   text-white outline outline-1 outline-white/20 rounded-lg outline-offset-4">
                Click to upload
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="ml-3 text-white transition-opacity duration-300 outline outline-1 outline-white/20 outline-offset-4 rounded-3xl items-centre">
        {showInstructions && (
          <p className="flex items-center justify-center h-full text-center">
            Instructions: Drag and drop your image here...
          </p>
        )}
        {isLoading && (
          <p className="flex items-center justify-center h-full text-center">
            Loading...
          </p>
        )}
        {!showInstructions && !isLoading && responseData && (
          <div className="flex flex-col items-center justify-center ">
            {getParagraphs(responseData).map((line, index) =>
              index === 0 ? (
                <p key={index} className="p-2 pt-10 pl-15 pr-15 text-centre">
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
      <div className="flex text-white outline outline-1 outline-white/20 outline-offset-4 rounded-3xl items-center justify-center mt-3 h-[60vh]">
        {!responseData && <RadialProgressBar rating={0} />}
        {responseData && !isLoading && (
          <RadialProgressBar rating={getRating(responseData)} />
        )}
      </div>
      <div className="flex flex-row items-stretch w-full">
        <div className="outline outline-1 outline-white/20 outline-offset-4 rounded-3xl p-4 flex-1 ml-3 mt-3">
          {responseData && !isLoading && (
            <h4 className="flex h4 text-centre items-center justify-center pt-10  ">
              Alternatives Choices
            </h4>
          )}
          {responseData &&
            !isLoading &&
            getAlternatives(responseData).map((line, index) =>
              index === 0 ? (
                <p key={index} className="p-2 pt-5 pl-15 pr-15 text-centre">
                  {line}
                </p>
              ) : (
                <p key={index} className="p-2 pt-0 pl-15 pr-15 text-centre">
                  {line}
                </p>
              )
            )}
        </div>
      </div>
      {console.log(responseData)}
    </>
  );
};

export default FileUpload;
