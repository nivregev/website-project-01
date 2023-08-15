import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";
import { useFormik } from "formik";
import joi from "joi";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";

const SignUp = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: joi
        .string()
        .min(6)
        .max(255)
        .email({ tlds: { allow: false } })
        .required(),
      password: joi.string().min(6).max(1024).required(),
      name: joi.string().min(2).max(255).required(),
    }),
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

        <FormInput
          type="text"
          label="Name"
          name="name"
          required
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
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
