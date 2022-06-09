import classes from "./MainNavigation.module.css";
import { NavLink, Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to={"/quotes"} className={classes.logo}>
        Great Quotes
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" className={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={classes.active}>
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
