import Cocktail from "../Cocktail/Cocktail";
import Form from "../Form/Form";
import useFetch from "../Hooks/useFetch";
import Loading from "../Loading/Loading";
import Error from "../pages/Error/Error";
import "./Cocktail.css";
import { useState } from "react";
// const URL = `www.thecocktaildb.com/api/json/v1/1/search.php?s=m`;
const CocktailList = () => {
  const [searchKey, setSearch] = useState("");
  const { data, loading, error } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchKey
  );
  console.log(searchKey);
  return (
    <>
      <Form setSearch={setSearch} />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error massage="Error In Our Server   Try Refresh the Page !" />
      ) : !data.drinks ? (
        <Error massage="No Drink Match Your search !" />
      ) : (
        <div className="cocktailContainer">
          {data.drinks.map((drink, i) => (
            <Cocktail drink={drink} key={drink.idDrink} i={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default CocktailList;
