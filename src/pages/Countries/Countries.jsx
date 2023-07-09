import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { data } from "../../data";
import "./Countries.css";

export function Countries() {
  const { continentId } = useParams();

  const continent = data.continents.find(
    ({ id }) => id === Number(continentId)
  );

  const countries = continent.countries;
  return (
    <div>
      <h1>Top countries in {continent.name} for your next holiday</h1>
      <div className="countries-container">
        {countries.map(({ id, name, image }) => (
          <Card
            key={id}
            continentId={continentId}
            countryId={id}
            image={image}
            name={name}
            inCountries
          />
        ))}
      </div>
    </div>
  );
}
