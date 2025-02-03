import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "modern-normalize";

import HomePage from "./pages/HomePage/HomePage";

// import { fetchContacts } from "./redux/contacts/operations";
import s from "./App.module.css";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";
import { refreshThunk } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  // const isRefreshed = useSelector(selectIsRefreshing)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
