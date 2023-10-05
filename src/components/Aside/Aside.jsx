import { BsGoogle, BsGithub, BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import swimming from "../../assets/qZone1.png";
import classImage from "../../assets/qZone2.png";
import play from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";
import './aside.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Aside = () => {
  const {loginWithGoogle }=useContext(AuthContext)

  const loginGoogle = ()=>{
    loginWithGoogle()
    .then(res=>alert(res))
    .catch(res=>alert(res))
  }
  return (
    <div className="  p-2">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Login with</h1>
        <div className="flex flex-col gap-5">
          <button onClick={loginGoogle} className="btn btn-outline  hover:text-white">
            <BsGoogle className="text-blue-500" />{" "}
            <span  className="text-blue-500">Login With Google</span>
          </button>
          <button className="btn btn-outline  ">
            <BsGithub /> <span>Login With Github</span>
          </button>
        </div>
      </div>
      {/* media start */}
      <div className="space-y-4 mt-10">
        <h1 className="text-xl font-bold">Find Us On</h1>
        <div className="flex flex-col gap-5">
          <button className="btn btn-outline flex gap-5 items-center ">
            <CiFacebook className="text-3xl bg-blue-500  text-white rounded-full" />{" "}
            <span>Facebook</span>
          </button>
          <button className="btn btn-outline flex gap-8 items-center ">
            <AiFillTwitterCircle className="text-3xl bg-blue-500  text-white rounded-full" />{" "}
            <span>Twitter</span>
          </button>
          <button className="btn btn-outline flex gap-5 items-center  ">
            <BsInstagram className="text-3xl    text-red-500  rounded" />{" "}
            <span>Instagram</span>
          </button>
        </div>
      </div>
      {/* images */}
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <img src={swimming} alt="" />
        </div>
        <div>
          <img src={classImage} alt="" />
        </div>
        <div>
          <img src={play} alt="" />
        </div>
      </div>
      {/* bg image */}
      <div>
        <div className="">
        <div>
          <img src={bg} alt="" />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Aside;
