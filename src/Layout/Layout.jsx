import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <section className="">
                {children}
            </section>
            <Footer />
        </div>
    );
}

export default Layout;