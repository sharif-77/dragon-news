import { Link, NavLink } from "react-router-dom";
import image from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((res) => alert(res))
      .catch((res) => alert(res));
  };
  

  console.log(user);
  return (
    <div>
      <nav className="flex flex-col md:flex-row   justify-between items-center gap-5 ">
        <div></div>
        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-600 underline font-bold" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-600 underline font-bold" : "font-bold"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive ? "text-red-600 underline font-bold" : "font-bold"
            }
          >
            Career
          </NavLink>
        </div>

        <div className="flex gap-10 items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL? user.photoURL : image} />
            </div>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className=" btn btn-success text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className=" btn btn-success text-white">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
