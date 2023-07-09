import { useNavigate } from "react-router-dom";
import "./Card.css";

export function Card({
  image,
  name,
  id,
  countryId,
  continentId,
  inContinent,
  inCountries,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (inContinent) {
      navigate(`/countries/${id}`);
    } else if (inCountries) {
      navigate(`/destinations/${continentId}/${countryId}`);
    }
  };
  return (
    <div className="card pointer" onClick={handleCardClick}>
      <img src={image} height="100%" width="100%" />
      <span className="card-name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          fill="white"
        >
          {" "}
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>{" "}
        {name}
      </span>
    </div>
  );
}
