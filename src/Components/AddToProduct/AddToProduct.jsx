import Swal from "sweetalert2";


const AddToProduct = () => {

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
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "content-type": "application/json"
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
  return (
    <div className="bg-red-200 p-24">
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
            className="input input-bordered w-full"
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
        <input className="btn btn-warning mt-5 btn-block" type="submit"  value="Book Now" />
      </form>
    </div>
  );
};

export default AddToProduct;
