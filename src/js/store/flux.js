const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: "Khristhopher",
      algo: "agregado",
      lastName: "Leon",
      todoList: ["Starwars"],
      personajesSwapi: [],
      planetsSwapi: [],
      favorites: [],
    },
    actions: {
      funcionDemo: () => console.log("Flux correcto"),

      fetchCharacters: async () => {
        const store = getStore();
        const localCharacters = localStorage.getItem("character");
        if (localCharacters) {
          setStore({ ...store, personajesSwapi: JSON.parse(localCharacters) });
          return;
        }
        let characterDetails = [];
        for (let index = 1; index <= 10; index++) {
          try {
            const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
            if (response.ok) {
              const data = await response.json();
              characterDetails.push(data.result);
              setStore({ ...store, personajesSwapi: characterDetails });
              localStorage.setItem("character", JSON.stringify(characterDetails));
            }
          } catch (error) {
            console.log(error);
          }
        }
      },

      fetchPlanets: async () => {
        const store = getStore();
        const localPlanets = localStorage.getItem("planet");
        if (localPlanets) {
          setStore({ ...store, planetsSwapi: JSON.parse(localPlanets) });
          return;
        }
        let planetDetails = [];
        for (let index = 1; index <= 10; index++) {
          try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${index}`);
            if (response.ok) {
              const data = await response.json();
              planetDetails.push(data.result);
              setStore({ ...store, planetsSwapi: planetDetails });
              localStorage.setItem("planet", JSON.stringify(planetDetails));
            }
          } catch (error) {
            console.log(error);
          }
        }
      },


      

      addFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites;
        const exists = favorites.find((favorito) => favorito === item);
        console.log(exists);
        if (exists) {
          const filteredFavorites = favorites.filter(
            (favorito) => item !== favorito
          );
          setStore({ ...store, favorites: filteredFavorites });
          return;
        }
        const newFavorites = [...favorites, item];
        setStore({ ...store, favorites: newFavorites });
        console.log("estoy en favoritos", newFavorites);
      },
    },
  };
};

export default getState;
