import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;
  console.log(product);
  return (
    <div>
     <div className="flex gap-8 py-12">
     <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandname}</p>
          <p>{type}</p>
          <p>{price}</p>
          <p>{rating}</p>

          <div className="flex">
            <button className="btn btn-primary mr-3">Update button</button>
            <button className="btn btn-success">Details button</button>
          </div>
        </div>
      </div>


     
     </div>
     
    </div>
  );
};

export default SingleProduct;
