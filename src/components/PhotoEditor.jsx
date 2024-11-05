import { useState } from "react";

import SliderGroup from "./SliderGroup";
import PhotoDisplayAndUploadContainer from "./PhotoDisplayAndUploadContainer";

const PhotoEditor = () => {
  const [photoSize, setPhotoSize] = useState(100);
  const [photoOpacity, setPhotoOpacity] = useState(100);

  return (
    <div className="photo-editor-container">
      <h1>Upload Your Image and Add Overlays</h1>

      <PhotoDisplayAndUploadContainer
        photoSize={photoSize}
        photoOpacity={photoOpacity}
      />
      <SliderGroup
        photoSize={photoSize}
        photoOpacity={photoOpacity}
        setPhotoSize={setPhotoSize}
        setPhotoOpacity={setPhotoOpacity}
      />
    </div>
  );
};

export default PhotoEditor;
