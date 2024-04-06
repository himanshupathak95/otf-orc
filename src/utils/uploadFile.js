export function uploadFile(file, setPreview, setResponseData, setIsLoading) {
  const reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onload = () => {
    const fileRes = btoa(reader.result);
    setPreview(`data:image/jpg;base64,${fileRes}`);

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
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