import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiTwotoneDelete,} from "react-icons/ai";

const MyCart = () => {
    const userInfo = useLoaderData()
    
    // const {_id,photo,name,brandname,type,price,shortdescription,rating,others} = userInfo;
    console.log(userInfo)
    const [users,setLoaderUser] = useState(userInfo)
    const handleDelete = (id) => {
        // confirm delete
        fetch(`https://automotive-server-site-kaeoyxuxx-anik-mks-projects.vercel.app/update${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 1){
                console.log("deleted    ")
                const remainig = users.filter(user => user._id !== id)
                setLoaderUser(remainig)
            }
        })
        console.log(id)
    }

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
        users.map(user=>
        <tr className="hover" key={user._key}>
          <th>3</th>
          <td>{user.brandname}</td>
          <td>{user.name}</td>
          <td>{user.type}</td>
          <td>{user.price}</td>
          <td><button onClick={()=>handleDelete(user._id)} className="btn"><AiTwotoneDelete></AiTwotoneDelete></button></td>
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