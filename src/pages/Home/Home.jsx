import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AttributesLavelcod from "../../components/AttributesLavelcod/AttributesLavelcod";
import BigCustomers from "../../components/BigCustomers/BigCustomers";
import TargetLavelcod from "../../components/TargetLavelcod/TargetLavelcod";
import Comments from "../../components/Comments/Comments";
import CommentsMd from "../../components/CommentsMd/CommentsMd";
import Satisfaction from "../../components/Satisfaction/Satisfaction";
import LatestNews from "../../components/LatestNews/LatestNews";
import Questions from "../../components/Questions/Questions";
import Portfolio from "../../components/Protfolio/Protfolio";
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
        <Portfolio></Portfolio>
      </div>
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
            <div>
              <CommentsMd></CommentsMd>
            </div>
          </>
        ) : (
          <>
            <div>
              <BigCustomers></BigCustomers>
            </div>
            <div className="">
              <AttributesLavelcod></AttributesLavelcod>
            </div>
            <div className="">
              <Comments></Comments>
            </div>
          </>
        )}
        <div>
        <Satisfaction></Satisfaction>
        </div>
        <div>
          <LatestNews></LatestNews>
        </div>
        <div>
          <Questions></Questions>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
