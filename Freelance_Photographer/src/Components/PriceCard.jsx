import "./PriceCard.css";

function PriceCard(props) {
  return (
    <>
      <div className="pricecardContainer">
        <h3 className="pricecardHeader">{props.header}</h3>
        <div className="pricecardInfo">
          <ul>
            <li className="details detail1">{props.detail1}</li>
            <li className="details">{props.detail2}</li>
            <li className="details">{props.detail3}</li>
          </ul>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </>
  );
}
export default PriceCard;
