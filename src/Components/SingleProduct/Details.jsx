import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg'

const Details = () => {
    const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;

  console.log(product);
    return (
        <div>
        <div>
{/* home slider */}
<Carousel>
                <div>
                    <img src={slider1} />
                    <div className="legend">
                        <h2 className="text-2xl mb-3">Upcoming Model:</h2>
                    <p className="text-base md:w-2/3 mx-auto">Exciting news! The {brandname} will soon have an updated version with even more advanced features. Stay tuned for what is next.</p>
                    </div>
                   
                </div>
                <div>
                    <img src={slider2} />
                    <div className="legend">
                    <h2 className="text-2xl mb-3">Special Offer::</h2>
                    <p className="text-base md:w-2/3 mx-auto">Limited-time offer: Get 20% off the {type} for a limited period. Don not miss this opportunity to own a luxury vehicle at a remarkable price.</p>
                    </div>
                </div>
                <div>
                    <img src={slider3} />
                    <div className="legend">
                    <h2 className="text-2xl mb-3">Best-Selling Car:</h2>
                    <p className="text-base md:w-2/3 mx-auto">The {type} is one of our best-selling cars, thanks to its exceptional performance, comfort, and reliability.</p>
                    </div>
                </div>
</Carousel>



            <div className="bg-[#052046] text-white md:p-20">
                <div className="md:flex gap-20 justify-between items-center md:w-3/4 mx-auto w-11/12">
                    <div className="w-3/5">
                        
                        <img className="mx-auto w-full" src={photo} alt="" />
                    </div>
                    <div>
                    
                    <h2>Overview:</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sint numquam corrupti aliquam harum consectetur ipsa voluptatem nisi enim repellat, veniam perferendis voluptates doloremque, in sed id mollitia impedit ipsum.
                    </p>
 
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Details;