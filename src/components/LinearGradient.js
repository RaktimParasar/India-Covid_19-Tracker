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
      <div style={boxStyle}>
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }}></div>
    </div>
  );
};

export default LinearGradient;
