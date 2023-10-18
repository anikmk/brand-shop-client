import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const registerUser = { name, email, password };

        if (password.length < 6) {
            toast("Password should be at least 6 characters long.");
            return;
        } else if (!/[@$!#%*?&]/.test(password)) {
            toast("Password should contain a special character.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast("Password should contain at least one uppercase letter.");
            return;
        }

        createUser(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire('Great', 'Your registration was successful', 'success');
                    console.log(result.user);
                }
                const user = {email}
                fetch('http://localhost:5000/user',{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
                // server side email send
            })
            .catch(error => {
                console.log(error.message);
                if (error.message) {
                    Swal.fire('Oops', 'This email address has already been used', 'error');
                }
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-sm text-center">
                            Already have an account?
                            <Link to="/login" className="text-blue-800 font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
