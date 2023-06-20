import PageHeader from "./common/pageHeader";
import FormInput from "./common/form-input";

const SignUp = () => {
  return (
    <>
      <PageHeader title="sign up" description="fill up your details" />

      <form autoComplete="off">
        <div className="alert alert-danger"> Error</div>

        <FormInput type="text" label="Name" name="name" required />

        <FormInput type="email" label="Email" name="email" required />

        <FormInput type="password" label="Password" name="password" required />

        <div className="my-2">
          <button className="btn btn-primary">Sign-Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
