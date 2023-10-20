import { Link, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg'
const SingleProduct = () => {
  const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;
  console.log(product);

  fetch(`https://automotive-server-site-2c1suavx6-anik-mks-projects.vercel.app/products?brandname=${(brandname)}`)
 .then(res=> res.json())
 .then(data=> console.log(data))


 
  return (
    <div>
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
   
    
          {/* <div className="card-actions">
            <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
          </div> */}

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Brand:
      {brandname}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="flex">
    <p>Name:{name}</p>
    <p>Type:{type}</p>
    </div>
    <div className="flex">
    <p>Price:{price}</p>
    <p>Rating:{rating}</p>
    </div>

    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div> */}
      
          
            <Link to={`/details/${_id}`}>
            <button className="badge badge-outline p-4">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
            <button className="badge badge-outline p-4">Update</button>
            </Link>
          
    </div>
  </div>
</div>
     
    </div>
  );
};

export default SingleProduct;
