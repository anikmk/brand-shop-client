import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Login = () => {
    const {logIn,loginWithGoogle} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)

    const handleLogin = (event) => {
                event.preventDefault();
                const form = event.target;
                const email = form.email.value;
                const password = form.password.value;
                const loginUser = {email,password}
                console.log(loginUser)
                logIn(email,password)
               
            
                      
                .then(result=> {
                    console.log(result)
                    // navigate after login
                    alert('succesfully login')
                    navigate(location?.state ? location.state:'/')
                })
                .catch(error=>{
                    console.log(error.message)
                    alert('your password or email invalid')
                })
    }
                const handleGoogleLogin = () => {
                    loginWithGoogle()
                    .then(result=>{
                        console.log(result.user)
                    })
                    .catch(error=>{
                        console.log(error.message)
                    })
                }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogin} className="btn btn-outline mt-4">Google</button>
        </div>
      </form>
      <p className="text-sm text-center">
              Do not have an account? <Link to="/register" className="text-blue-800 font-semibold">Register</Link>
      </p>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Login;