import React, { useState } from 'react'
``
const FileUpload = () => {
  const [highlight, setHighlight] = useState(false);
  const [preview, setPreview] = useState("");
  const [drop, setDrop] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); 
  const [responseData, setResponseData] = useState("");

  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("enter!");
    (preview === "") && setHighlight(true);
  };

  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("over!");
    (preview === "") && setHighlight(true);
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
  };

  function uploadFile(file) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      // this is the base64 data
      const fileRes = btoa(reader.result);
      console.log(`data:image/jpg;base64,${fileRes}`);
      setPreview(`data:image/jpg;base64,${fileRes}`);

      // Create a new FormData object
      const formData = new FormData();
      // Append the file
      console.log(file);
      formData.append('file', file);

      // Make a POST request to your backend
      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })
      .then(response =>{
        console.log(response);
        return response.json()
      })
      .then(data => {
        console.log(data);
        setResponseData(data.data); 
      })
      .catch(error => {
        console.error(error);
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
        // className={`upload${highlight ? " is-highlight" : drop ? " is-drop" : ""}`}
        // className="flex items-center justify-center w-72 h-72 text-white font-['Montserrat'] bg-blue-500 rounded-lg"
        // style={{ backgroundImage: `url(${preview})` }}
        className={`flex items-center justify-center w-98 h-96 text-white font-['Montserrat'] bg-blue-500 rounded-lg relative overflow-hidden outline outline-2 outline-white/30 outline-offset-4
                  ${highlight ? 'bg-blue-500/50' : ''} 
                  ${drop ? 'opacity-70' : ''}`}
      >
        {preview && (
                <img src={preview} alt="Uploaded preview" className="absolute inset-0 object-cover w-full h-full" />
            )}
        <form className="form">
          <p
            className={`text-sm uppercase tracking-wide ${drop ? 'opacity-0' : ''}`}>
            Drag and Drop image here
          </p>
          <div 
            // className="upload-button-wrap"
            // className="upload-button-wrap absolute bottom-0 left-0 w-52"
            className="upload-button-wrap absolute bottom-0 left-0 w-52"
          >
            <input
              type="file"
              // className="upload-file"
              // className="opacity-0 w-full h-full absolute bottom-0 left-0" 
              className="opacity-0 w-full h-full absolute bottom-0 left-0 cursor-pointer"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
            { !fileUploaded && <button 
            // className="flex items-center justify-center mt-2 w-full h-12 text-sm font-bold uppercase text-white bg-black" >FileUpload Here
            className="flex items-center justify-center mt-2 w-full h-12 text-sm font-bold uppercase text-white bg-black">
              FileUpload Here
            </button>}
          </div>
        </form>
      </div>
      <p>{responseData}</p>
    </>
  );
};

export default FileUpload;