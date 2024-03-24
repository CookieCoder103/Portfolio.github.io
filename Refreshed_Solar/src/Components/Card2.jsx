import "./styles/Card2.css";

export default function Card2(props) {
  return (
    <>
      <div className="card2Container">
        <img className="card2Img" src={props.card2Img} />
        <div className="card2InfoContainer">
          <h3 className="card2Title">{props.card2Title}</h3>
          <p className="card2Text">{props.card2Text}</p>
        </div>
      </div>
    </>
  );
}
