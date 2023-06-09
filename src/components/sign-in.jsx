import PageHeader from "./common/pageHeader";

const SignIn = () => {
  return (
    <PageHeader
      title={
        <>
          Sign-In to Project01 <i className="bi bi-geo-fill"></i>
        </>
      }
      description={"fill up your details"}
    />
  );
};

export default SignIn;
