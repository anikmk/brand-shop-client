import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData();
  const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = product;

  console.log(product);
    return (
        <div>
            <h1>details more information{name}</h1>
            <h1>price : {price}</h1>
        </div>
    );
};

export default Details;