import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import FooterMd from "../components/FooterMd/FooterMd";

const Layout = ({ children }) => {
  const [md, setMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    console.log(navigator.userAgent);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      window.innerWidth > 768 ? setMd(true) : setMd(false);
    });
  }, []);
  return (
    <div>
      <Header />
      <section className="">{children}</section>
      {
        md ? (
          <FooterMd></FooterMd>
          ):(
            <Footer />
        )
      }
    </div>
  );
};

export default Layout;
