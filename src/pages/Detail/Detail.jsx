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
      <div>
        <img src={image} height="300px" width="300px" />
        <div>
          <div>description: {description}</div>
          <div>ratings:{ratings}</div>
          <div>reviews: {reviews}</div>
          <div>location: {location}</div>
          <div>openingHours: {openingHours}</div>
          <div>ticketPrice: {ticketPrice}</div>
          <a href={website} target="">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
