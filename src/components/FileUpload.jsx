import React, { useState } from "react";
import RadialProgressBar from "./RadialProgressBar";
import Alternatives from "./Alternatives";
import Paragraphs from "./Paragraphs";

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
      <Paragraphs showInstructions={showInstructions} responseData={responseData} isLoading={isLoading}/>
      <RadialProgressBar responseData={responseData} isLoading={isLoading}/>
      <Alternatives responseData={responseData} isLoading={isLoading}/>
      {console.log(responseData)}
    </>
  );
};

export default FileUpload;
