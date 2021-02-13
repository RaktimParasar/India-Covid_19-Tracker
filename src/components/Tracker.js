import india from "../assets/india.svg";
const Tracker = () => {
  return (
    <div>
      <header className="header">
        <div>
          <img
            className="header__logo"
            src={india}
            alt="India covid 19 tracker logo"
          />
        </div>
        <div>
          <h1>India Covid 19 Tracker</h1>
          <p>
            Let's all pray to make our Earth Covid-19 free soon, Stay Safe and
            do TheLocate
          </p>
        </div>
      </header>
    </div>
  );
};

export default Tracker;
