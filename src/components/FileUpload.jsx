import React, { useState } from "react";

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
        className={`flex items-center justify-center w-98 h-[75vh] text-white  bg-transparent rounded-3xl relative overflow-hidden outline outline-2 outline-white/30 outline-offset-4
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
              <button className="flex items-center justify-center mt-2 w-full h-12 text-sm   text-white outline outline-2 outline-white/30 rounded-lg outline-offset-4">
                Click to upload
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="ml-6 text-white transition-opacity duration-300 outline outline-2 outline-white/30 outline-offset-4 rounded-3xl ">
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
          <>
            {responseData.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {index === 0 ? (
                  <p className="p-2 pt-3 pl-3 pr-3 text-centre">{line}</p>
                ) : (
                  <p className="p-2 pt-0 pl-3 pr-3 text-centre">{line}</p>
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      {console.log(responseData)}
    </>
  );
};

export default FileUpload;
