import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const isLogetIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogetIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
