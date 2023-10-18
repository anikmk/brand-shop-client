import { Link } from "react-router-dom";

const HomeCard = ({product}) => {
    const {_id,photo,brandname} = product
  return (
    <div className="">
      <div className="card bg-blue-100 shadow-xl">
        <figure className="p-5">
          <img
            className="hover:scale-125 duration-500"
            src={photo}
            alt="car"
          />
        </figure>
        <div className="pb-4">
          <Link to={`/singleproduct/${_id}`}>
          <h2 className=" text-center text-lg md:text-2xl">Brand : {brandname}</h2> 
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
