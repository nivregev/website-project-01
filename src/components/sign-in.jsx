import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";
import { useFormik } from "formik";
import joi from "joi";

const SignIn = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate(values) {
      const schema = joi.object({
        email: joi
          .string()
          .min(6)
          .max(255)
          .email({ tlds: { allow: false } })
          .required(),
        password: joi.string().min(6).max(1024).required(),
      });

      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }
      const errors = {};

      for (const detail of error.details) {
        const errorKey = detail.path[0];
        errors[errorKey] = detail.message;
      }

      console.log(errors);

      return errors;
    },
    onSubmit(values) {
      console.log("submitted", values);
    },
  });

  return (
    <>
      <PageHeader title="sign in" description="fill up your details" />

      <div className="alert alert-danger">Error</div>

      <form autoComplete="off" onSubmit={formik.handleSubmit} noValidate>
        {/* email */}
        <FormInput
          type="email"
          label="Email"
          name="email"
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />

        {/* password */}
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
            Sign-In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
