import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ item, actions }) => {
  const navigate = useNavigate();

  const { uid, properties } = item;

  const handleLearnMore = () => {
    if (item.description === "A planet.")
    navigate(`/planet/${uid}`);
    else
    navigate(`/personaje/${uid}`)
  };

  const imageURL = item.description === "A planet."
  ? `https://starwars-visualguide.com/assets/img/planet/${uid}.jpg`
  : `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

  const handleAddFavorite = () => {
    actions.addFavorite(item);
  };
  console.log(item)

  return (
    <div className="card w-70 h-70 border border-danger">
      
      <img
        src={imageURL}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{properties.name}</h5>
        {item.type === "personaje" && (
          <>
            <p className="card-text">Gender: {properties.gender}</p>
            <p className="card-text">Hair Color: {properties.hair_color}</p>
            <p className="card-text">Eye Color: {properties.eye_color}</p>
          </>
        )}
        {item.type === "planet" && (
          <>
            <p className="card-text">Population: {properties.population}</p>
            <p className="card-text">Terrain: {properties.terrain}</p>
          </>
        )}
        <div className="d-flex justify-content-between aling-item-start">
          <button className="btn btn-outline-primary" onClick={handleLearnMore}>
            Learn more
          </button>
          <button className="btn btn-outline-warning" onClick={handleAddFavorite}>
            <i className="fab fa-gratipay"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
