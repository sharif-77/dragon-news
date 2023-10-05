import { Link, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const [seePassword,setSeePassword]=useState(false)
    const {loginWithEmailAndPass}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);

    const handleLogin =e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;

        loginWithEmailAndPass(email,password)
        .then(()=>{
            alert('Login Success')
            if (location.state) {
                navigate(location?.state?location.state:'/')
            }
           
        })
        .catch(res=>alert(res.message))


    }

   
    return (
        <div className="m-5">
            <Navigation/>
            <div className="shadow-xl p-10 md:w-3/5 lg:w-2/5 bg-[#000000] text-white m-auto mt-28 rounded "> 
            <p className="text-center my-10 text-xl font-bold">Login your account </p>
                <form onSubmit={handleLogin}  className="w-full space-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email"> Email Address</label>
                        <input className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md" type="email" name="email" id="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="flex flex-col gap-2 relative ">
                        <label htmlFor="password"> Password</label>
                        <input className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md" type={seePassword?'text':'password'} name="password" id="password" placeholder="Enter Your Password"/>
                        <span onClick={()=>setSeePassword(!seePassword)} className="absolute top-10 right-2 text-black text-2xl">
                            {seePassword?<AiFillEyeInvisible />:<AiFillEye/>}
                        </span>
                    </div>
                    <div className="flex flex-col ">
                        <button className="bg-[#14c898f3] py-2 px-4 mt-5 rounded-md  font-bold" type="submit">Login</button>
                        
                    </div>
                </form>

                <p className="my-5 ">Have No Account? <Link className="ml-1 text-green-400" to='/register'>Register</Link></p>

            </div>
        </div>
    );
};

export default Login;