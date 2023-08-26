import Layout from "../../Layout/Layout";
import AttributesLavelcod from "../../components/AttributesLavelcod/AttributesLavelcod";
import BigCustomers from "../../components/BigCustomers/BigCustomers";
import TargetLavelcod from "../../components/TargetLavelcod/TargetLavelcod";
const Home = () => {
    return (
        <Layout>
            <div>
                <div>
                    <TargetLavelcod></TargetLavelcod>
                </div>
                <div>
                    <BigCustomers></BigCustomers>
                </div>
                <div>
                    <AttributesLavelcod></AttributesLavelcod>
                </div>
            </div>
        </Layout>
    );
}

export default Home;