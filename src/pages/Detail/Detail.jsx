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
  return (
    <div>
      <h1>{destination.name}</h1>
    </div>
  );
}
