import { Card } from "../../components/Card/Card";
import { data } from "../../data";
import "./Continents.css";

export function Continents() {
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2 className="blue">Top Continents for your next holiday</h2>
      <div className="continents-container">
        {data?.continents.map(({ id, image, name }) => (
          <Card key={id} id={id} image={image} name={name} inContinent />
        ))}
      </div>
    </div>
  );
}
