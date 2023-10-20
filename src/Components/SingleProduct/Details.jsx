import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg'
import { FaCarAlt, FaCarCrash, FaRecycle } from "react-icons/fa";
import Swal from "sweetalert2";

const Details = () => {
    const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;



    const handleFormData = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const others = form.others.value;
        const rating = form.rating.value;

        const newUser = {photo,name,brandname,type,price,shortdescription,rating,others}
        console.log(newUser)
        fetch('https://automotive-server-site-2c1suavx6-anik-mks-projects.vercel.app/update',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your product has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
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


<div className="hero py-14 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={photo} width={"360px"} className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-xl font-bold">tailored to a car selling platform!</h1>
      <p className="py-6 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex justify-around pb-6">
      <ul>
        <li>1. Competitive Pricing</li>
        <li>2. Secure Online Payment</li>
        <li>3. Customer Support</li>
      </ul>
      <ul>
        <li>4. Flexible Return Policy</li>
        <li>5. New Arrivals and Updates</li>
        <li>6. Exclusive Loyalty Benefits</li>
        <li>7. 100% Satisfaction Guarantee</li>
      </ul>
      </div>
      <button className="btn btn-primary btn-block">More..</button>
    </div>
  </div>
</div>


<div className="bg-red-200 p-8 md:p-24">
        <div className="text-center md:px-12">
        <h2 className="md:text-4xl pb-5 font-bold border border-b-black">AutoMotive Enthusiast Data Collection</h2>
        <p className="pb-8 mt-3">Welcome to our Car Enthusiast Data Collection! We value your input and would like to learn more about your automotive interests. Please take a moment to fill out this brief survey, and help us tailor our website content to your preferences. Your feedback is essential to enhancing your experience on our platform. Thank you for participating!</p>
        </div>
      <form onSubmit={handleFormData}>

      <div className="md:flex">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text text-lg">Photo</span>
        </label>
        <label className="input-group">
          <input
         
            name="photo"
            type="text"
            placeholder="Photo url..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 md:ml-6">
        <label className="label">
          <span className="label-text text-lg">Name</span>
        </label>
        <label className="input-group">
          <input
          
            name="name"
            type="text"
            placeholder="Name..."
            className="input input-bordered w-full border"
          />
        </label>
      </div>
      </div>
      <div className="md:flex mt-3">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text text-lg">Brand Name</span>
        </label>
        <label className="input-group">
          <input
           
            name="brandname"
            type="text"
            placeholder="Brand Name..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 md:ml-6">
        <label className="label">
          <span className="label-text text-lg">Type</span>
        </label>
        <label className="input-group">
          <input
            
            name="type"
            type="text"
            placeholder="Type..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      <div className="md:flex mt-3">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text text-lg">Price</span>
        </label>
        <label className="input-group">
          <input
           
            name="price"
            type="text"
            placeholder="Price..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 md:ml-6">
        <label className="label">
          <span className="label-text text-lg">Short description</span>
        </label>
        <label className="input-group">
          <input
         
            name="shortdescription"
            type="text"
            placeholder="Short description..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      <div className="md:flex mt-3">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text text-lg">Rating</span>
        </label>
        <label className="input-group">
          <input
          
            name="rating"
            type="text"
            placeholder="Rating..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 md:ml-6">
        <label className="label">
          <span className="label-text text-lg">Others</span>
        </label>
        <label className="input-group">
          <input
            name="others"
            type="text"
            placeholder="Others..."
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
        <input className="btn btn-warning mt-5 btn-block" type="submit"  value="ADD TO CART" />
      </form>
            </div>

{/*  */}

<div className="bg-white py-14">
            <div className="w-11/12 md:w-2/3 mx-auto">
                <div className="content text-center ">
                    <h1 className="text-xl mb-5 md:text-4xl">WHY CHOOSE US?</h1>
                    <p>Explore our exclusive showroom featuring a diverse range of luxury vehicles, including BMW, Maserati, Mercedes-Benz, and more. Discover automotive excellence with every brand, and find your perfect ride at [Automotive].</p>

                </div>
                <div className="md:flex justify-between gap-8 items-center text-center pt-8">
                    <div className='bg-[#052046] p-10 rounded text-white mb-3 md:mb-0 '>
                        <FaCarAlt className='mx-auto text-5xl mb-3'></FaCarAlt>
                        <h3 className='text-xl mb-2 font-semibold'>Buy and Sale Vehiclese</h3>
                        <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>
                    <div className='bg-[#052046] p-10 rounded text-white mb-3 md:mb-0 '>
                    <FaCarCrash className='mx-auto text-5xl mb-3'></FaCarCrash>
                    <h3 className='text-xl mb-2 font-semibold'>Vehicles Rental Service</h3>
                    <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>
                    <div className='bg-[#052046] p-10 rounded text-white mb-3 md:mb-0 '>
                    <FaRecycle className='mx-auto text-5xl mb-3'></FaRecycle>
                    <h3 className='text-xl mb-2 font-semibold'>Vehicles Servicing</h3>
                    <p className='text-sm'>We buy and sale barand new car and also used car of any brand</p>
                    </div>

                </div>

            </div>
        </div>
            
</div>
 </div>
        
    );
};

export default Details;