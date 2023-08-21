import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 py-3  md:px-6">
                {children}
            </section>
            <Footer />
        </div>
    );
}

export default Layout;