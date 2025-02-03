import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    dispatch(loginThunk(values)).unwrap();
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <Field
              name="email"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            ></Field>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            ></Field>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <p>
            You don`t have account yet?{" "}
            <Link className="text-blue-500" to="/register">
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
