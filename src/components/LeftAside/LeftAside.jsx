import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`/categories.json`)
        .then(res=>res.json())
        .then(allDatas=>setDatas(allDatas))
    },[])
    console.log(datas);
    return (
        <div className="sticky top-0">
            <div className="flex flex-col gap-5 text-center p-5">
                <p className="bg-gray-300  font-bold p-3 rounded-md">All news </p>
                {
                    datas.slice(1,datas.length ).map(data=><NavLink  key={data.id} to={`/category/${data.id}`} className={({isActive})=>isActive?'bg-gray-300 text-red-600 font-bold p-3 rounded-md':'bg-gray-300 font-bold p-3 rounded-md'}>{data.name}</NavLink>)
                }
            </div>
            
        </div>
    );
};

export default LeftAside;