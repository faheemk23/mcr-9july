import { useParams } from "react-router-dom";
import { data } from "../../data";
import "./Detail.css";

export function Detail() {
  const { continentId, countryId, destinationId } = useParams();

  const continent = data.continents.find(
    ({ id }) => id === Number(continentId)
  );
  const country = continent.countries.find(
    ({ id }) => id === Number(countryId)
  );

  const destination = country.destinations.find(
    ({ id }) => id === Number(destinationId)
  );

  const {
    name,
    website,
    ticketPrice,
    openingHours,
    location,
    reviews,
    ratings,
    image,
    description,
  } = destination;
  return (
    <div>
      <h1>{name}</h1>
      <div className="detail-container">
        <img src={image} height="300px" width="300px" />
        <div>
          <div>
            <span className="blue">Description</span> : {description}
          </div>
          <div>
            {" "}
            <span className="blue">Ratings:</span> {ratings}
          </div>
          <div>
            {" "}
            <span className="blue">Reviews:</span> {reviews}
          </div>
          <div>
            {" "}
            <span className="blue">Location:</span> {location}
          </div>
          <div>
            {" "}
            <span className="blue">Opening Hours:</span> {openingHours}
          </div>
          <div>
            {" "}
            <span className="blue">Ticket Price:</span> {ticketPrice}
          </div>
          <a href={website} target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
