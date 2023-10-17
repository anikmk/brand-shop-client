import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Sharate/HomeCard/HomeCard";


const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <h1>this is home section:::{products.length}</h1>

                <div className="grid md:grid-cols-3 justify-between space-y-6 my-24">
                    {
                        products.map(product=><HomeCard key={product._id}
                        product={product}
                        ></HomeCard>)
                    }
                </div>

        </div>
    );
};

export default Home;