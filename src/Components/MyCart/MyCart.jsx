import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const userInfo = useLoaderData()
    
    // const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = userInfo;
    console.log(userInfo)

    return (
        <div className="w-3/4 mx-auto py-24">
            

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Brand Name</th>
        <th>Name</th>
        <th>Type</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      
      {
        userInfo.map(user=>
        <tr className="hover" key={user._key}>
          <th>3</th>
          <td>{user.brandname}</td>
          <td>{user.name}</td>
          <td>{user.type}</td>
          <td>{user.price}</td>
        </tr>)
      }
    </tbody>
    
  </table>
  <button className="btn btn-block mt-5">Confirm pharches</button>
</div>

        </div>
    );
};

export default MyCart;