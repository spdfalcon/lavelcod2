import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AttributesLavelcod from "../../components/AttributesLavelcod/AttributesLavelcod";
import BigCustomers from "../../components/BigCustomers/BigCustomers";
import TargetLavelcod from "../../components/TargetLavelcod/TargetLavelcod";
import Comments from "../../components/Comments/Comments";
const Home = () => {
  const [md, setMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    console.log(navigator.userAgent);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      window.innerWidth > 768 ? setMd(true) : setMd(false);
    });
  }, []);
  return (
    <Layout>
      <div>
        <div>
          <TargetLavelcod></TargetLavelcod>
        </div>
        {md ? (
          <>
            <div>
              <AttributesLavelcod></AttributesLavelcod>
            </div>
            <div>
              <BigCustomers></BigCustomers>
            </div>
          </>
        ) : (
          <>
            <div>
              <BigCustomers></BigCustomers>
            </div>
            <div>
              <AttributesLavelcod></AttributesLavelcod>
            </div>
            <div>
              <Comments></Comments>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
