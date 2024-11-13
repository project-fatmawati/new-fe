// import { useRoutes } from 'react-router-dom';
import TentangKami from "../components/About/TentangKami";
import DropPoints from "../components/About/DropPoints";
import Newsletter from "../components/Landingpage/Newsletter";
// import TestingApi from "./TestingAPI";

function About() {
  return (
    <div>
      <TentangKami />
      <DropPoints />
      <Newsletter />
      {/* <TestingApi/> */}
    </div>
  );
}

export default About;
