import axios from "axios";

function result({
  resultTitle,
  time_until_close,
  distance_time,
  healthy_level,
}) {
  const [image, setImage] = setState(resultImage);
  const [title, setTitle] = setState(resultTitle);
  const [close, setClose] = setState(time_until_close);
  const [distance, setDistance] = setState(distance_time);
  const [health, setHealth] = setState(healthy_level);

  return (
    <>
      <div className="resultContain">
        <img src={image} />
        <h2>
          {title}
          test
        </h2>
      </div>
    </>
  );
}

export default result;
