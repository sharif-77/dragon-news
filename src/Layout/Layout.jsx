import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <div className="max-w-6xl mx-auto py-10 font-poppins">
            <Outlet/>
            
        </div>
    );
};

export default Layout;