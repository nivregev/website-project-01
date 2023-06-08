import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Project01 <i className="bi bi-geo-fill"></i> App
        </>
      }
      description={" test my About description"}
    />
  );
};

export default About;
