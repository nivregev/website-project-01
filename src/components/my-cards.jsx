import PageHeader from "./common/pageHeader";

const MyCards = () => {
  return (
    <PageHeader
      title={
        <>
          My Cards <i className="bi bi-geo-fill"> </i>Project01
        </>
      }
      description={"test for my cards description"}
    />
  );
};

export default MyCards;
