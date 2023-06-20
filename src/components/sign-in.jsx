import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";

const SignIn = () => {
  return (
    <>
      <PageHeader title="sign in" description="fill up your details" />

      <div className="alert alert-danger">Error</div>

      <form autoComplete="off">
        {/* email */}
        <FormInput type="email" label="Email" name="email" required />

        {/* password */}
        <FormInput type="password" label="Password" name="password" required />

        <div className="my-2">
          <button className="btn btn-primary">Sign-In</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
