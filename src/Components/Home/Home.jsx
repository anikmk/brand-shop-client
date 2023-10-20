import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Sharate/HomeCard/HomeCard";
import HomeSlider from "../../Sharate/HomeSlider/HomeSlider";
import WhyChoiceUs from "../../Sharate/WhyChoiceUs/WhyChoiceUs";
import Pricing from "../../Sharate/Pricing/Pricing";


const Home = () => {
  const products = useLoaderData();
  return (
    <div>
  <HomeSlider></HomeSlider>
  <WhyChoiceUs></WhyChoiceUs>
  <div className="my-14">
    <h1 className="text-center text-xl md:text-4xl pb-5">Services Products</h1>
    
    <div className="grid gap-5 w-11/12 mx-auto md:grid-cols-3 justify-between items-center space-y-6">
      {products.slice(0, 6).map((product) => ( // Use .slice(0, 4) to display the first 4 products
        <HomeCard key={product._id} product={product}></HomeCard>
      ))}
    </div>
  </div>
  <Pricing></Pricing>
</div>

  );
};

export default Home;
