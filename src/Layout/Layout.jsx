import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <section className="grid"></section>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;