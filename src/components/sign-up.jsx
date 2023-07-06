import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";
import { Formik, useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate(values) {
      const errors = {};

      if (values.name === "") {
        errors.name = "name is required";
      } else if (values.name.length < 2) {
        errors.name = "name must be at least 2 characters";
      }

      if (values.email === "") {
        errors.email = "email is required";
      } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com/g.test(values.email)) {
        errors.email = "please provide a valid email address";
      }

      if (values.password === "") {
        errors.password = "password is required";
      } else if (values.password.length < 6) {
        errors.password = "password must be at least 6 characters";
      }

      return errors;
    },
    onSubmit(values) {
      console.log("submitted", values);
    },
  });

  return (
    <>
      <PageHeader title="sign up" description="fill up your details" />

      <form autoComplete="off" onSubmit={formik.handleSubmit} noValidate>
        <div className="alert alert-danger"> Error</div>

        <FormInput
          type="text"
          label="Name"
          name="name"
          required
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
        />

        <FormInput
          type="email"
          label="Email"
          name="email"
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />

        <FormInput
          type="password"
          label="Password"
          name="password"
          required
          {...formik.getFieldProps("password")}
          error={formik.touched.password && formik.errors.password}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="btn btn-primary"
          >
            Sign-Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
