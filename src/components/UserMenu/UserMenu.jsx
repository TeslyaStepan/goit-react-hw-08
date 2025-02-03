import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <span>Welcome, ${user.name}!</span>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  );
}
