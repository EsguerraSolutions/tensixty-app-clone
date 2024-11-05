import { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisuallyHiddenInput from "./VisuallyHiddenInput";

import bedroomPhoto from "../assets/images/sample-bedroom-photo.jpg";

const PhotoDisplayAndUploadContainer = ({ photoSize, photoOpacity }) => {
  const [file, setFile] = useState();
  const [initialFileChanged, setInitialFileChanged] = useState(false);

  const handleChangeFile = (e) => {
    setInitialFileChanged(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="displayed-image-container">
        <img
          id="fetched-image-preview"
          src={initialFileChanged ? file : bedroomPhoto}
          alt="sample picture of a bedroom"
          style={{
            transform: `scale(${photoSize / 100})`,
            opacity: photoOpacity / 100,
          }}
        />
      </div>
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput type="file" onChange={handleChangeFile} multiple />
      </Button>
    </>
  );
};

export default PhotoDisplayAndUploadContainer;
