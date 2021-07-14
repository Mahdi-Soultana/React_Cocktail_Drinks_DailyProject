import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div>
        <h1>
          {" "}
          <Link to="/">React_CockTail</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            {" "}
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <div>About</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
