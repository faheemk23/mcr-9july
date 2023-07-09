import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { data } from "../../data";
import "./Destinations.css";

export function Destinations() {
  const { continentId, countryId } = useParams();

  const continent = data.continents.find(
    ({ id }) => id === Number(continentId)
  );
  const country = continent.countries.find(
    ({ id }) => id === Number(countryId)
  );

  const destinations = country.destinations;

  return (
    <div>
      <h1>Top destinations in {country.name} for your next holiday</h1>
      <div className="dest-container">
        {destinations.map(({ id, name, image }) => (
          <Card
            continentId={continentId}
            countryId={countryId}
            destinationId={id}
            key={id}
            image={image}
            name={name}
            inDestination
          />
        ))}
      </div>
    </div>
  );
}
