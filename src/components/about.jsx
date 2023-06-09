import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About <i className="bi bi-geo-fill"></i> Project01
        </>
      }
      description={" test my About description"}
    />
  );
};

export default About;
