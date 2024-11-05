import SliderContainer from "./SliderContainer";

const SliderGroup = ({
  photoSize,
  photoOpacity,
  setPhotoSize,
  setPhotoOpacity,
}) => {
  return (
    <div className="slider-group">
      <SliderContainer
        label="Resize Image"
        defaultValue={100}
        value={photoSize}
        setValue={setPhotoSize}
      />
      <SliderContainer
        label="Opacity"
        defaultValue={100}
        value={photoOpacity}
        setValue={setPhotoOpacity}
      />
    </div>
  );
};

export default SliderGroup;
