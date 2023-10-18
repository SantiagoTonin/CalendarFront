import underConstruction from "../../assets/images/underConstruction/underConstructionLogo2.png";
import "./underConstruction.css";

const UnderConstruction = () => {
  return (
    <main className="underConstructionContainer">
      <div className="underConstruction">
        <h2>Página en Construcción</h2>
        <h4>Disculpe las molestias</h4>
        <img src={underConstruction} alt="Página en construcción" />
        <div>
          <div className="progressBar stripes">
            <span className="progressBarInner"></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
