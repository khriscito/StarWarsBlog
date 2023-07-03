import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  console.log(store.personajesSwapi);
  console.log(store.planetsSwapi);

  return (
    <div className="text-start mt-5 container ">
      <h2 className="text-danger">Characters</h2>
      <div className="carrousel">
        {store.personajesSwapi.map((personaje) => (
          <Card key={personaje.uid} item={personaje} actions={actions} />
        ))}
      </div>
      <h2 className="mt-5 text-danger">Planets</h2>
      <div className="carrousel">
        {store.planetsSwapi.map((planet) => (
          <Card key={planet.uid} item={planet} actions={actions} />
        ))}
      </div>
    </div>
  );
};
