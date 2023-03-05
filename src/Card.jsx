// import kundalpur from "./images/kundalpur.png";
import placemarker from "./images/place-marker.png";

function Card(props){
    return (
        <div className="cart">
            <div className="card">
                <img className="card--image" src={`../../images/${props.item.image}`} alt="beautiful view" />
                <div className="details">
                    <span className="card--location">
                        <img className="place-marker" src={placemarker} alt="place-marker" />
                        <span className="card--country">{props.item.country}</span>
                        <a href={props.item.mapLocation} target="_blank" rel="noreferrer">view on Maps</a>
                    </span>
                    <h3 className="card--place">{props.item.place}</h3>
                    <p className="card--date">{props.item.travelingDate}</p>
                    <p className="card--discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi, beatae culpa fuga consequatur nostrum nihil mollitia repellat minima impedit nam omnis, dolore, odio soluta.</p>
                </div>
            </div>
                <div className="linebreak"></div>
         </div>
    )
}
export default Card;