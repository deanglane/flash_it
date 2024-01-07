import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={styles.navigation}>
        <h3>Landing Navigation</h3>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
