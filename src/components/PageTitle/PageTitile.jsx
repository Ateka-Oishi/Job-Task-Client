/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | Task Management`}</title>
    </Helmet>
  );
};

export default PageTitle;
