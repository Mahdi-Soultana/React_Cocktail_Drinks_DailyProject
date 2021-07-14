import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./singleCocktail.css";
import Loading from "../../Loading/Loading";
import Error from "../Error/Error";
import { useState, useEffect } from "react";
const SingleCocktail = () => {
  const [ingredients, setIngredient] = useState([]);
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, loading, error } = useFetch(url);
  let drink;
  if (data) {
    var {
      strAlcoholic: category,
      strDrink: name,
      strGlass: glass,
      strDrinkThumb: img,
      strInstructions: info
    } = (drink = data.drinks[0]);
  }
  useEffect(() => {
    for (const ingredient in drink) {
      if (Object.hasOwnProperty.call(drink, ingredient)) {
        //  const element = drink[ingredient];
        if (ingredient.includes("strIngredient") && !!drink[ingredient]) {
          setIngredient(prevIngredient => [
            ...prevIngredient,
            drink[ingredient]
          ]);
        }
      }
    }
    return () => {};
  }, [data, drink]);

  return (
    <div className="tc page">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error massage="Error In Our Server   Try Refresh the Page !" />
      ) : !data.drinks ? (
        <Error massage="No Drink Match Your search !" />
      ) : (
        <>
          <h1>{name}</h1>
          <div className="SinglecocktailContainer">
            <div className="imgCont">
              <img src={img} alt={img} />
            </div>
            <div className="info">
              <h3>Name: {name}</h3>
              <h5>Category: {category}</h5>
              <p>Glass: {glass}</p>
              <p>Instructions: {info}</p>

              <hr />
              <p>ingredients :</p>
              {
                <ol>
                  {ingredients.map((ingr, i) => (
                    <li key={i}>{ingr}</li>
                  ))}
                </ol>
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCocktail;
