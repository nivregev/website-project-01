import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          Project01 <i className="bi bi-geo-fill"> </i>App
        </>
      }
      description={"test my Home  description "}
    />
  );
};

export default Home;
