import React from "react";

const DragAndDropArea = ({
  handleEnter,
  handleLeave,
  handleOver,
  handleUpload,
  highlight,
  drop,
  preview,
  fileUploaded,
}) => {
  return (
    <div
      onDragEnter={handleEnter}
      onDragLeave={handleLeave}
      onDragOver={handleOver}
      onDrop={handleUpload}
      className={`flex z-6 items-center justify-center w-98 h-[75vh] text-white  bg-transparent rounded-3xl relative overflow-hidden outline outline-1 outline-white/20 outline-offset-4
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
            onChange={handleUpload}
          />
          {!fileUploaded && (
            <button className="flex items-center justify-center mt-2 w-full h-12 text-sm   text-white outline outline-1 outline-white/20 rounded-lg outline-offset-4">
              Click to upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DragAndDropArea;
