import "./Cocktail.css";
import { Link } from "react-router-dom";
const Cocktail = props => {
  const {
    idDrink: id,
    strAlcoholic: category,
    strDrink: name,
    strGlass: glass,
    strDrinkThumb: img
  } = props.drink;
  // console.log(props);
  return (
    <div className="ItemContainer">
      <div>
        <div className="imgContainer">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h5>{category || "Categroy"}</h5>
        <p>{glass}</p>
      </div>
      <div>
        <Link to={`/cocktail/${id}`}>
          <button className="icon btn edit item">Details </button>
        </Link>
      </div>

      <span className="Number">{props.i + 1}</span>
    </div>
  );
};

export default Cocktail;
