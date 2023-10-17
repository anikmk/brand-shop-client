import { Link } from "react-router-dom";

const HomeCard = ({product}) => {
    const {photo,name,brandname,type,price,shortdescription,rating,others} = product
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="car"
          />
        </figure>
        <div className="card-body">
          <Link>
          <h2 className="card-title">Brand name:{brandname}</h2> 
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
