import { Link, useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;
  console.log(product);

//   fetch(`http://localhost:5000/products?brandname=${(brandname)}`,{
//     method:"get"
    

//   })
//  .then(res=>res.json())
//  .then(data=>{
//     console.log(data)
//  })

  return (
    <div>
    
    <div>
    <div className="flex gap-8">
     <div className="card card-side bg-base-100 shadow-xl mt-8">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandname}</p>
          <p>{price}</p>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
            <Link to="/update">
            <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
     
     </div>
    </div>
    <div>

    </div>
     
    </div>
  );
};

export default SingleProduct;
