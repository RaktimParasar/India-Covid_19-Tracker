const LinearGradient = ({ data }) => {
  const boxStyle = {
    width: 180,
    margin: "auto",
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 15,
  };
  return (
    <div>
      <div style={boxStyle} className="linear--gradient box__style">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </div>
      <div
        style={{ ...boxStyle, ...gradientStyle }}
        className="gradient--margin"
      ></div>
    </div>
  );
};

export default LinearGradient;
